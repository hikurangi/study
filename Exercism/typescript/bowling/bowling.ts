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

const isStrike = (rolls: Array<number>): Boolean => rolls[0] === 10
const isSpare = (rolls: Array<number>): Boolean =>
  !isStrike(rolls) && rolls[0] + rolls[1] === 10
const isOpen = (rolls: Array<number>): Boolean =>
  rolls[0] + (rolls[1] ?? 0) < 10

const isLastFrame = (game: Game): Boolean => game.length === 9

const mapRollsToGame = (game: Game, rolls: Array<number>): Game => {
  const areWeOnTheLastFrame = isLastFrame(game)
  //   console.log({ areWeOnTheLastFrame, game, rolls })
  if (rolls.length < 1) {
    return game
  } else {
    if (isStrike(rolls)) {
      return mapRollsToGame(
        [
          ...game,
          { type: 'open', value: rolls[0] + (rolls[1] ?? 0) + (rolls[2] ?? 0) }
        ],
        areWeOnTheLastFrame ? [] : rolls.slice(1)
      )
    } else if (isOpen(rolls)) {
      return mapRollsToGame(
        [...game, { type: 'open', value: rolls[0] + (rolls[1] ?? 0) }],
        rolls.slice(2)
      )
    } else if (isSpare(rolls)) {
      //   console.log('In Spare Arm')
      return mapRollsToGame(
        [
          ...game,
          {
            type: 'spare',
            value: rolls[0] + (rolls[1] ?? 0) + (rolls[2] ?? 0)
          }
        ],
        areWeOnTheLastFrame ? [] : rolls.slice(2)
      )
    } else {
      //   console.log({ game, rolls })
      throw new Error('unhandled exception!')
    }
  }
}
// return mapRollsToGame([...game, ])
//   }
//   if (rolls.length === 0) {
//     return game
//   }
//   const firstRoll = rolls[0]
//   const secondRoll = rolls[1] ?? 0
//   const thirdRoll = rolls[2] ?? 0
//   console.log({ game, rolls, firstRoll, secondRoll, thirdRoll })
//   if (isStrike(rolls)) {
//     if (rolls.length < 3) {
//       throw new Error('Strike cannot be scored!')
//     }
//     return mapRollsToGame(
//       [...game, { type: 'strike', value: firstRoll + secondRoll + thirdRoll }],
//       rolls.slice(1)
//     )
//   } else if (isSpare(rolls)) {
//     if (rolls.length < 3) {
//       throw new Error('Spare cannot be scored!')
//     }
//     return mapRollsToGame(
//       [...game, { type: 'spare', value: firstRoll + secondRoll + thirdRoll }],
//       rolls.slice(2)
//     )
//   } else if (isOpen(rolls)) {
//     console.log('/n/n/n/n/n/nIS OPEN/n/n/n/n/n/n')
//     if (rolls.length < 2) {
//       throw new Error('Open cannot be scored!')
//     }
//     return mapRollsToGame(
//       [...game, { type: 'open', value: firstRoll + secondRoll }],
//       rolls.slice(2)
//     )
//   } else {
//     throw new Error('Invalid situation!')
//   }
// }

export class Bowling {
  private _rolls = new Array<number>()

  // TODO: automatically derive _game from _rolls using ES6 proxy
  private _game: Game = new Array<Frame>()

  public roll (pins: number): void {
    // if (pins < 0) {
    //   throw new Error('Negative roll is invalid')
    // } else if (pins > 10) {
    //   throw new Error('Pin count exceeds pins on the lane')
    // }

    this._rolls.push(pins)

    // This line disappears when we use a proxy as described above
    this._game = mapRollsToGame([], this._rolls)

    // if (this._game.length > 10) {
    //   // Feels weird cause you can still fuck up the internal game state. This is why we don't do it like this.
    //   throw new Error('Cannot roll after game is over')
    // }
  }

  public score (): number {
    const score = this._game.reduce((acc, frame) => acc + frame.value, 0)
    console.log({ score, game: this._game })
    return score
  }
}
