type Rolls = [number] | [number, number] | [number, number, number]
type Strike = {
  type: 'strike'
  value: number
}
type Spare = {
  type: 'spare'
  rolls: Rolls
  value: number
}
type Open = {
  type: 'open'
  rolls: Rolls
  value: number
}

type Frame = Strike | Spare | Open

type Game = Array<Frame>

const mapRollsToGame = (game: Game, remainingRolls: Array<number>): Game => {
  if (remainingRolls.length < 1) {
    return game
  }

  const firstRoll = remainingRolls[0]
  const secondRoll = remainingRolls[1] ?? 0
  const thirdRoll = remainingRolls[2] ?? 0

  const frameRolls = (
    remainingRolls[1] === null || remainingRolls[1] === undefined
      ? [firstRoll]
      : [firstRoll, secondRoll]
  ) as Rolls
  const frameRollsTotal = firstRoll + secondRoll
  // NOTE: this whole thing breaks with the wrong amount of rolls
  const isLastFrame = game.length > 8

  const doesExceedPinCount = (): Boolean =>
    (frameRollsTotal > 10 && firstRoll !== 10) ||
    (isLastFrame &&
      firstRoll === 10 &&
      secondRoll < 10 &&
      secondRoll + thirdRoll > 10)

  const handleStrike = (): Game =>
    // A strike is where all ten pins are knocked down by the first throw. The total value of a strike is 10 plus the number of pins knocked down in the next two throws. If a strike is immediately followed by a second strike, then the value of the first strike cannot be determined until the ball is thrown one more time.

    mapRollsToGame(
      [
        ...game,
        {
          type: 'strike',
          value: frameRollsTotal + thirdRoll
          // if we're in the last frame,
          // the value of the roll is
          // 10 (first roll) +
          // second roll +
          // third roll ONLY IF second roll is not greater than 9 and the second and third rolls are not a spare
        }
      ],
      isLastFrame ? [] : remainingRolls.slice(1)
    )

  const handleOpenFrame = (): Game =>
    // An open frame is where a score of less than 10 is recorded for the frame. In this case the score for the frame is the number of pins knocked down.

    mapRollsToGame(
      [
        ...game,
        {
          type: 'open',
          rolls: frameRolls,
          value: frameRollsTotal
        }
      ],
      remainingRolls.slice(2)
    )

  const handleSpare = (): Game =>
    // NOTE! [0, 10] condition is excluded by strike condition above
    // A spare is where all ten pins are knocked down by the second throw. The total value of a spare is 10 plus the number of pins knocked down in their next throw.
    mapRollsToGame(
      [
        ...game,
        {
          type: 'spare',
          rolls: frameRolls,
          value: frameRollsTotal + thirdRoll
        }
      ],
      isLastFrame ? [] : remainingRolls.slice(2)
    )

  if (doesExceedPinCount()) {
    throw new Error('Pin count exceeds pins on the lane')
  }

  if (isLastFrame) {
    // do last frame stuff
    if (firstRoll === 10) {
      return handleStrike()
    } else if (frameRollsTotal < 10) {
      return handleOpenFrame()
    } else {
      return handleSpare()
    }
  } else {
    return firstRoll === 10
      ? handleStrike()
      : frameRollsTotal < 10
      ? handleOpenFrame()
      : handleSpare()
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

    if (this._game.length > 8) {
      console.log(JSON.stringify(this._game, null, '  '))
    }
    if (this._game.length > 10) {
      // Feels weird cause you can still fuck up the internal game state. This is why we don't do it like this.
      throw new Error('Cannot roll after game is over')
    }
  }

  public score (): number {
    const finalFrame = this._game[9]
    if (
      this._game.length < 10 ||
      (this._game.length === 10 &&
        finalFrame.type === 'strike' &&
        (finalFrame.value === 10 || finalFrame.value === 20)) ||
      (this._game.length === 10 &&
        finalFrame.type === 'spare' &&
        finalFrame.value === 10)
      // need to know about remaining rolls
    ) {
      throw new Error('Score cannot be taken until the end of the game')
    }
    return this._game.reduce((acc, frame) => acc + frame.value, 0)
  }
}
