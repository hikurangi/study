type OneRoll = [number]
type TwoRolls = [number, number]
type ThreeRolls = [number, number, number]

type Strike = {
  type: 'strike'
  value: number
  rolls: OneRoll
}
type Spare = {
  type: 'spare'
  value: number
  rolls: OneRoll | TwoRolls
}
type Open = {
  type: 'open'
  value: number
  rolls: OneRoll | TwoRolls
}
type Final = {
  type: 'final'
  value: number
  rolls: OneRoll | TwoRolls | ThreeRolls
}

type Frame = Strike | Spare | Open | Final

type Game = Array<Frame>

const sum = (numbers: Array<number>): number =>
  numbers.reduce((subTotal, n) => subTotal + n)

const sumUntil = (limit: number, numbers: Array<number>): number =>
  sum(numbers.slice(0, limit))

const mapRollsToGame = (game: Game, rolls: Array<number>): Game => {
  if (rolls.length < 1) {
    return game
  } else {
    const isLastFrame = game.length === 9
    const currentRolls = rolls.slice(0, 3)

    if (currentRolls[0] === 10) {
      // Strike
      const frame: Final | Strike = isLastFrame
        ? {
            type: 'final',
            value: sumUntil(3, currentRolls),
            rolls: rolls.slice(0, 3) as OneRoll | TwoRolls | ThreeRolls
          }
        : { type: 'strike', value: sumUntil(3, currentRolls), rolls: [10] }
      return mapRollsToGame([...game, frame], isLastFrame ? [] : rolls.slice(1))
    } else if (sumUntil(2, currentRolls) === 10) {
      // Spare
      const frame: Final | Spare = isLastFrame
        ? {
            type: 'final',
            value: sumUntil(3, currentRolls),
            rolls: rolls.slice(0, 3) as OneRoll | TwoRolls | ThreeRolls
          }
        : {
            type: 'spare',
            value: sumUntil(3, currentRolls),
            rolls: rolls.slice(0, 2) as OneRoll | TwoRolls
          }

      return mapRollsToGame([...game, frame], isLastFrame ? [] : rolls.slice(2))
    } else {
      // Open
      // I think this is safe as a 'default' branch
      return mapRollsToGame(
        [
          ...game,
          {
            type: 'open',
            value: sumUntil(2, currentRolls),
            rolls: rolls.slice(0, 2) as OneRoll | TwoRolls
          }
        ],
        rolls.slice(2)
      )
    }
  }
}

const isFinalFrameComplete = ({ rolls }: Frame): Boolean =>
  // if it's a strike and it has three rolls
  (rolls[0] === 10 && rolls.length === 3) ||
  // OR if it's a spare and has three rolls
  (rolls[0] !== 10 &&
    rolls[0] + (rolls[1] ?? 0) === 10 &&
    rolls.length === 3) ||
  // OR if it's open and has two
  (rolls[0] + (rolls[1] ?? 0) < 10 && rolls.length === 2)

export class Bowling {
  private _rolls = new Array<number>()

  // TODO: automatically derive _game from _rolls using ES6 proxy
  private _game: Game = new Array<Frame>()

  public roll (pins: number): void {
    if (pins < 0) {
      throw new Error('Negative roll is invalid')
    }

    if (pins > 10) {
      throw new Error('Pin count exceeds pins on the lane')
    }

    const prevFrame = this._game[this._game.length - 1]
    const prevRoll = this._rolls[this._rolls.length - 1] ?? 0
    const prevPrevRoll = this._rolls[this._rolls.length - 2] ?? 0

    // refactor to rely on final frame format and its rolls
    if (this._game.length > 9) {
      if (prevPrevRoll === 10 && prevRoll < 10 && prevRoll + pins > 10)
        throw new Error('Pin count exceeds pins on the lane')
    } else {
      if (prevFrame?.type === 'open' && prevRoll + pins > 10) {
        // TODO: consolidate
        throw new Error('Pin count exceeds pins on the lane')
      }
    }
    const updatedRolls = [...this._rolls, pins]
    const updatedGame = mapRollsToGame([], updatedRolls)

    if (
      updatedGame.length > 10 ||
      (prevFrame?.type === 'final' && isFinalFrameComplete(prevFrame))
    ) {
      throw new Error('Cannot roll after game is over')
    }

    this._rolls = updatedRolls
    // Could use a proxy
    this._game = updatedGame
  }

  public score (): number {
    const prevFrame = this._game[this._game.length - 1]

    if (
      this._game.length < 10 ||
      (prevFrame.type === 'final' &&
        // Final Strike
        ((prevFrame.rolls.length < 3 && prevFrame.rolls[0] === 10) ||
          // Final Spare
          (prevFrame.rolls.length < 3 &&
            prevFrame.rolls[0] + (prevFrame.rolls[1] ?? 0) === 10)))
    ) {
      throw new Error('Score cannot be taken until the end of the game')
    }

    return this._game.reduce((acc, frame) => acc + frame.value, 0)
  }
}
