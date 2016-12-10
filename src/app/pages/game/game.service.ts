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

  // creating and initializing array of Environment objects
  // creating and initializing array of Environment objects
 _rating: any[] = [
 {
   UserName: 'Dan',
   UserScore: 10,
   UserRating: 5,
 },
 {
   UserName: 'Amir',
   UserScore: 15,
   UserRating: 3,
 },
 ];

  getUserScores(): UserScore[]
  {
    // return new UserScore{('dan', 8)};
    return this._rating;
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

  private createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', `Bearer ${this._identityService.token}`);
  }
}
