import { Component, OnInit, Input } from '@angular/core';
import {QuestionsRepositoryService} from '../services/questions-repo-service';
import {QuestionsHttpRepositoryService } from '../services/questions-repo-http-service';
import { ActivatedRoute, Router} from '@angular/router';

import {Question} from '../models/question';
import {TriviaItem, Status} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import {TriviaGame} from '../models/trivia-game';
import {TriviaItemPreviewComponent} from './trivia-item-preview'
import {TriviaItemEditComponent} from './trivia-item-edit'


@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game-editor-component.html',
  styleUrls: ['./game-component.css']
})
export class GameEditorComponent implements OnInit {

  gameId: string;
  game: TriviaGame;
  /**
   *
   */
  constructor(private _questionRepo: QuestionsHttpRepositoryService, private _route: ActivatedRoute, private router: Router) {
    //this.game = new TriviaGame('amir');
    this._route.params.subscribe(p => this.gameId = p['gameId']);
  }

  addItem(newItem: TriviaItem) {
    // var obj: TriviaItem = TriviaItem.CreateDefault();

    //Object.assign(obj, newItem);
    this.game.AddItem(newItem);
  }
  ngOnInit() {
    if (this.gameId && this.gameId.length > 0) {
      this._questionRepo.getTriviaGame(this.gameId).subscribe(d => this.game = d);
    }
    else {
      this.game = new TriviaGame('amir');
    }
  }
  save() {
    this._questionRepo.addGame(this.game)
      .subscribe(arg => { this.router.navigate([''])});

  }


}
