type Strike = {
  type: 'strike'
  rolls: [10]
}
type Spare = {
  type: 'spare'
  rolls: [number, number]
}
type Open = {
  type: 'open'
  rolls: [number, number]
}

type Frame = Strike | Spare | Open

export class Bowling {
  private game: Array<Frame> = []
  private incompleteFrame: null | number = null

  public roll = (pins: number): void => {
    if (pins === 10) {
      this.game = this.game.concat({ type: 'strike', rolls: [10] })
    } else if (this.incompleteFrame !== null) {
      // if we're on the second roll of a new frame
      if (this.incompleteFrame + pins < 10) {
        // is an open frame
        this.game = this.game.concat({
          type: 'open',
          rolls: [this.incompleteFrame, pins],
        })
        this.incompleteFrame = null
      } else if (this.incompleteFrame + pins === 10) {
        // spare
        this.game = this.game.concat({
          type: 'spare',
          rolls: [this.incompleteFrame, pins],
        })
        this.incompleteFrame = null
      } else {
        throw new Error('Invalid roll(s)!')
      }
    } else if (pins >= 0 && pins <= 10) {
      // else if is the first roll of a new frame
      this.incompleteFrame = pins
    } else {
      throw new Error('Invalid roll(s)!')
    }
  }

  public score = (): number =>
    this.game.reduce((acc, frame, idx) => {
      if (frame.type === 'open') {
        return acc + sumRolls(frame)
      } else if (frame.type === 'spare' && this.game[idx + 1]) {
        if (idx === 9) {
          return acc + 10 + this.incompleteFrame!
        } else {
          return acc + 10 + this.game[idx + 1].rolls[0]
        }
      } else if (frame.type === 'strike' && this.game[idx + 1]) {
        if (idx === 9) {
          return acc + 10 + this.incompleteFrame!
        } else {
          return acc + 10 + sumRolls(this.game[idx + 1])
        }
      } else {
        return acc
      }
    }, 0)
}

// An open frame is where a score of less than 10 is recorded for the frame. In this case the score for the frame is the number of pins knocked down.

// A spare is where all ten pins are knocked down by the second throw. The total value of a spare is 10 plus the number of pins knocked down in their next throw.

// A strike is where all ten pins are knocked down by the first throw. The total value of a strike is 10 plus the number of pins knocked down in the next two throws. If a strike is immediately followed by a second strike, then the value of the first strike cannot be determined until the ball is thrown one more time.

const sumRolls = (frame: Frame) =>
  frame.type === 'strike' ? 10 : frame.rolls[0] + frame.rolls[1]
