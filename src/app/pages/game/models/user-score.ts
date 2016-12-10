
/**
 * UserScore
 */
export class UserScore {

  constructor(private _userName?: string, private _userScore?: number, private _starRating?: number) {
  }

  public get UserName() {
    return this._userName;
  }
  public get UserScore() {
    return this._userScore;
  }

  public get UserRating() {
    return this._starRating;
  }
}
