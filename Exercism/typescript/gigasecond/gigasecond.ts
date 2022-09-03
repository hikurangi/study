export default class Gigasecond {

  private gigasecond = 1000000000 * 1000
  private inputDate: Date

  constructor(d: Date) {
    this.inputDate = d
  }

  public date = (): Date => new Date(this.inputDate.getTime() + this.gigasecond)

}