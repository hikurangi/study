export default class Gigasecond {

  private gigasecondInMs = 1000000000000
  private inputDate: Date

  constructor(d: Date) {
    this.inputDate = d
  }

  public date = (): Date => new Date(this.inputDate.getTime() + this.gigasecondInMs)
}