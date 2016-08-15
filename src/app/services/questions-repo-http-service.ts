
//import {TriviaItem, Question, Answer } from '../models/models';
import {Question} from '../models/question';
import {TriviaItem} from '../models/Trivia-Item';
import {TriviaGame} from '../models/Trivia-game';
import {Answer} from '../models/answer';
import { Http, Response, RequestOptionsArgs} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Injectable }     from '@angular/core';

export interface IQuestionsRepositoryService {
  getTriviaGame(id: string): Observable<TriviaGame>;
  getTriviaGames(): Observable<TriviaGame[]>;
  addGame(newGame: TriviaGame): Observable<string>;
}

@Injectable()
export class QuestionsHttpRepositoryService implements IQuestionsRepositoryService {
  _mockGame: TriviaGame;
  constructor(private _http: Http) {

    this._mockGame = new TriviaGame('amir');
    this._mockGame.AddItem(new TriviaItem(new Question("Some Question about some shit 1?"), [new Answer('Some Answer about some shit 1', true), new Answer('Some Answer about some shit 2'), new Answer('Some Answer about some shit 3')]));
    this._mockGame.AddItem(new TriviaItem(new Question("Some Question about some shit 2?"), [new Answer('Some Answer about some shit 2'), new Answer('Some Answer about some shit 1', true), new Answer('Some Answer about some shit 3')]));
    this._mockGame.AddItem(new TriviaItem(new Question("Some Question about some shit 3?"), [new Answer('Some Answer about some shit  3'), new Answer('Some Answer about some shit  4', true)]));


  }

  getTriviaGame(id: string): Observable<TriviaGame> {

    return this._http.get(`http://localhost:5000/api/gamemanage/${id}`)
      .map((res: Response) => Object.assign(new TriviaGame("fg"), res.json()));

    // var a :ArrayLike<TriviaItem> = [
    //       new TriviaItem(new Question("q 1"), [new Answer('answer 1'), new Answer('answer 2')]),
    //       new TriviaItem(new Question("q 2"), [new Answer('answer 3'), new Answer('answer 4')])
    //       ];
    //     var items:Set<TriviaItem> = new Set([
    //       new TriviaItem(new Question("q 1"), [new Answer('answer 1'), new Answer('answer 2')]),
    //       new TriviaItem(new Question("q 2"), [new Answer('answer 3'), new Answer('answer 4')])
    //       ]);

    //return Promise.resolve(this._mockGame);
    //return Observable.from(a);
    //o.
    //return Observable.from(items);
  }
  addGame(newGame: TriviaGame): Observable<string> {

    return this._http.post('http://localhost:5000/api/gamemanage', newGame)
      .map((res: Response) => res.json());
  }
  getTriviaGames(): Observable<TriviaGame[]> {

    return this._http.get(`http://localhost:5000/api/gamemanage`)
      .map((res: Response) => <TriviaGame[]>res.json());
  }
}
