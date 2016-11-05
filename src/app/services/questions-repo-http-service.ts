import { IdentityService } from './../identity.service';

//import {TriviaItem, Question, Answer } from '../models/models';
import { Question } from '../models/question';
import { TriviaItem } from '../models/Trivia-Item';
import { TriviaGame } from '../models/trivia-game';
import { Answer } from '../models/answer';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export interface IQuestionsRepositoryService {
  getTriviaGame(id: string): Observable<TriviaGame>;
  getTriviaGames(): Observable<TriviaGame[]>;
  addGame(newGame: TriviaGame): Observable<string>;
}

@Injectable()
export class QuestionsHttpRepositoryService implements IQuestionsRepositoryService {
  constructor(private _http: Http, private _identityService: IdentityService) {
  }

  private createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', `Bearer ${this._identityService.token}`);
  }

  getTriviaGame(id: string): Observable<TriviaGame> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this._http.get(`http://localhost:5000/api/gamemanage/${id}`, { headers: headers })
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
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.post('http://localhost:5000/api/gamemanage', newGame, { headers: headers })
      .map((res: Response) => res.json());
  }
  getTriviaGames(): Observable<TriviaGame[]> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(`http://localhost:5000/api/gamemanage`, { headers: headers })
      .map((res: Response) => <TriviaGame[]>res.json());
  }
}
