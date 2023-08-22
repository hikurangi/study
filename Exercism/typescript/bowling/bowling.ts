type Strike = {
  type: 'strike'
  value: number
}
type Spare = {
  type: 'spare'
  value: number
}
type Open = {
  type: 'open'
  value: number
}
type Tenth = {
  type: 'tenth'
  value: number
}

type Frame = Strike | Spare | Open | Tenth

type Game = Array<Frame>

const mapRollsToGame = (game: Game, remainingRolls: Array<number>): Game => {
  if (remainingRolls.length < 1) {
    return game
  }

  const nextRoll = remainingRolls[0]
  const secondRoll = remainingRolls[1] ?? 0
  const thirdRoll = remainingRolls[2] ?? 0

  const isFinalFrame = game.length > 8

  if (nextRoll === 10) {
    // strike

    return mapRollsToGame(
      [
        ...game,
        {
          type: isFinalFrame ? 'tenth' : 'strike',
          value: nextRoll + secondRoll + thirdRoll
        }
      ],
      remainingRolls.slice(1)
    )
  } else if (nextRoll + secondRoll === 10) {
    // spare
    return mapRollsToGame(
      [
        ...game,
        {
          type: isFinalFrame ? 'tenth' : 'spare',
          value: nextRoll + secondRoll + thirdRoll
        }
      ],
      remainingRolls.slice(2)
    )
  } else if (nextRoll + secondRoll < 10) {
    // open
    return mapRollsToGame(
      [
        ...game,
        {
          type: isFinalFrame ? 'tenth' : 'open',
          value: nextRoll + secondRoll
        }
      ],
      remainingRolls.slice(2)
    )
  } else if (nextRoll + secondRoll > 10) {
    throw new Error('Pin count exceeds pins on the lane')
  } else {
    throw new Error('Unknown issue!')
  }
}

export class Bowling {
  private _rolls = new Array<number>()

  // TODO: automatically derive _game from _rolls using ES6 proxy
  private _game: Game = new Array<Frame>()

  public roll (pins: number): void {
    if (pins < 0) {
      throw new Error('Negative roll is invalid')
    } else if (pins > 10) {
      throw new Error('Pin count exceeds pins on the lane')
    }

    this._rolls.push(pins)

    // This line disappears when we use a proxy as described above
    this._game = mapRollsToGame([], this._rolls)

    if (this._game.length > 10) {
      // Feels weird cause you can still fuck up the internal game state. This is why we don't do it like this.
      throw new Error('Cannot roll after game is over')
    }
  }

  public score (): number {
    // const finalFrame = this._game[]
    // if (
    //   this._game.length < 10 ||
    //   (this._game.length === 10 &&
    //     finalFrame.type === 'strike' &&
    //     (finalFrame.value === 10 || finalFrame.value === 20)) ||
    //   (this._game.length === 10 &&
    //     finalFrame.type === 'spare' &&
    //     finalFrame.value === 10)
    //   // need to know about remaining rolls
    // ) {
    //   console.log({ finalFrame, game: this._game, length: this._game.length })
    //   throw new Error('Score cannot be taken until the end of the game')
    // }
    return this._game.reduce((acc, frame) => acc + frame.value, 0)
  }
}
