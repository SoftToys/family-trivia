import {Question} from './question';
import {Answer} from './answer';


export enum Status {
  Pending = 0,
  Diplayed = 1,
  AnsweredWrong = 2,
  AnsweredCorrect = 3
}

/**
 * TriviaItem
 */
export class TriviaItem {

  public status: Status;
  constructor(public _question?: Question, private _answers?: Answer[]) {
    this.status = Status.Pending;
  }

  public static CreateDefault() {
    return new TriviaItem(new Question(), []);
  }

  public get questionTxt() {
    return this._question.txt;
  }
  public get answers() {
    return this._answers;
  }
  public addAnswer(answer: Answer):number {
    this._answers.push(answer);
    return this._answers.length;
  }

}
