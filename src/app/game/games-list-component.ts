import { Component, OnInit, Input } from '@angular/core';

import {QuestionsHttpRepositoryService} from '../services/questions-repo-http-service';

import {Question} from '../models/question';
import {TriviaItem, Status} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import {TriviaGame} from '../models/trivia-game';
import {TriviaItemPreviewComponent} from './trivia-item-preview'
import {TriviaItemEditComponent} from './trivia-item-edit';
import {TakePipe} from '../shared/pipes';


@Component({
  moduleId: module.id,
  selector: 'game-list',
  templateUrl: 'games-list-component.html'
})
export class GamesListComponent implements OnInit {

  userGames: TriviaGame[];

  constructor(private _questionRepo: QuestionsHttpRepositoryService) {

  }

  ngOnInit() {
    this._questionRepo.getTriviaGames()
      .subscribe(arg =>
        this.userGames = arg
      );

  }


}
