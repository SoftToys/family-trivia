import { Component, OnInit, Input } from '@angular/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS } from '@angular/common';
import {QuestionsRepositoryService} from '../services/questions-repo-service';
import {Question} from '../models/question';
import {TriviaItem, Status} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import {TriviaGame} from '../models/Trivia-Game';
import {TriviaItemPreviewComponent} from './trivia-item-preview'
import {TriviaItemEditComponent} from './trivia-item-edit'


@Component({
  moduleId: module.id,
  selector: 'game',
  pipes: [],
  providers: [FORM_PROVIDERS],
  directives: [TriviaItemPreviewComponent, TriviaItemEditComponent, FORM_DIRECTIVES],

  templateUrl: 'game-editor-component.html'
})
export class GameEditor implements OnInit {

  @Input()
  gameId: number;

  game: TriviaGame;
  /**
   *
   */
  constructor(private _questionRepo: QuestionsRepositoryService) {
    this.game = new TriviaGame('amir');
  }

  addItem(newItem: TriviaItem) {
   // var obj: TriviaItem = TriviaItem.CreateDefault();

    //Object.assign(obj, newItem);
    this.game.AddItem(newItem);
  }
  ngOnInit() {

  }
  save(){
    this._questionRepo.addGame(this.game);
  }


}
