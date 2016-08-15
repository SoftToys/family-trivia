import { Component, OnInit, Input } from '@angular/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS } from '@angular/common';
import {  ROUTER_DIRECTIVES } from '@angular/router';
import {QuestionsHttpRepositoryService} from '../services/questions-repo-http-service';

import {Question} from '../models/question';
import {TriviaItem, Status} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import {TriviaGame} from '../models/Trivia-Game';
import {TriviaItemPreviewComponent} from './trivia-item-preview'
import {TriviaItemEditComponent} from './trivia-item-edit';
import {TakePipe} from '../shared/pipes';


@Component({
  moduleId: module.id,
  selector: 'game-list',
  pipes: [TakePipe],
  providers: [FORM_PROVIDERS],
  directives: [TriviaItemPreviewComponent, TriviaItemEditComponent, ROUTER_DIRECTIVES],

  templateUrl: 'games-list-component.html'
})
export class GamesList implements OnInit {

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
