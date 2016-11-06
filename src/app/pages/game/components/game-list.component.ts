import { QuestionsHttpRepositoryService } from './../game.service';
import { TriviaGame } from './../models/trivia-game';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'game-list',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./game-list.component.scss')],
  template: require('./game-list.component.html'),
})
export class GameListComponent {

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
