
//import {TriviaItem, Question, Answer } from '../models/models';
import {Question} from '../models/question';
import {TriviaItem} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Injectable }     from '@angular/core';

export interface IQuestionsRepositoryService {
  getTriviaGame(id: number): Promise<TriviaItem[]>;
}

@Injectable()
export class QuestionsRepositoryService implements IQuestionsRepositoryService {
  constructor(private _http: Http) {

  }

  getTriviaGame(id: number): Promise<TriviaItem[]> {

    // var a :ArrayLike<TriviaItem> = [
    //       new TriviaItem(new Question("q 1"), [new Answer('answer 1'), new Answer('answer 2')]),
    //       new TriviaItem(new Question("q 2"), [new Answer('answer 3'), new Answer('answer 4')])
    //       ];
    //     var items:Set<TriviaItem> = new Set([
    //       new TriviaItem(new Question("q 1"), [new Answer('answer 1'), new Answer('answer 2')]),
    //       new TriviaItem(new Question("q 2"), [new Answer('answer 3'), new Answer('answer 4')])
    //       ]);
    return Promise.resolve([
      new TriviaItem(new Question("Some Question about some shit 1?"), [new Answer('Some Answer about some shit 1', true), new Answer('Some Answer about some shit 2'), new Answer('Some Answer about some shit 3')]),
      new TriviaItem(new Question("Some Question about some shit 2?"), [new Answer('Some Answer about some shit 2'), new Answer('Some Answer about some shit 1', true), new Answer('Some Answer about some shit 3')]),
      new TriviaItem(new Question("Some Question about some shit 3?"), [new Answer('Some Answer about some shit  3'), new Answer('Some Answer about some shit  4', true)])
    ]);
    //return Observable.from(a);
    //o.
    //return Observable.from(items);
  }
}
