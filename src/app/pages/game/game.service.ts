import { AnswerAttempt } from './models/answer-attempt';
import { UserScore } from './models/user-score';
import { IdentityService } from './../../identity.service';
import { Question } from './models/question';
import { TriviaItem } from './models/Trivia-Item';
import { TriviaGame } from './models/trivia-game';
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

  getTriviaGame(id: string): Observable<TriviaGame> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this._http.get(`http://localhost:5000/api/gamemanage/${id}`, { headers: headers })
      .map((res: Response) =>
        Object.assign(new TriviaGame(this._identityService.userId), res.json()));
  }

  getUserScores(): Observable<UserScore[]> {


    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(`http://localhost:5000/api/gamemanage/rating`, { headers: headers })
      .map((res: Response) => this.mapToArray(res.json()));
  }

  mapToArray(arr): UserScore[] {
    let result: UserScore[] = [];
    arr.forEach((element) => {
      let userScore = new UserScore(element._username, element._attempted, 5);
      result.push(userScore);
    });

    return result;
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

  onAnswerAttempt(gameId: string, userAnswer: boolean) {

    let headers = new Headers();
    let aa = new AnswerAttempt(gameId, userAnswer);
    this.createAuthorizationHeader(headers);
    return this._http.post(`http://localhost:5000/api/gamemanage/bla`, aa, { headers: headers })
      .map((res: Response) => res.json());
  }

  private createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', `Bearer ${this._identityService.token}`);
  }


}
