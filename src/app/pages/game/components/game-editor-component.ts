import { IdentityService } from './../../../identity.service';
import { TriviaItem } from './../models/trivia-item';
import { QuestionsHttpRepositoryService } from './../game.service';
import { TriviaGame } from './../models/trivia-game';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'game',
  templateUrl: './game-editor-component.html',
  styleUrls: ['./game-play.component.css']
})
export class GameEditorComponent implements OnInit {

  gameId: string;
  game: TriviaGame;
  /**
   *
   */
  constructor(private _questionRepo: QuestionsHttpRepositoryService,
    private _route: ActivatedRoute,
    private _identityService: IdentityService,
    private router: Router) {
    this._route.params.subscribe(p => this.gameId = p['gameId']);
  }
//
  addItem(newItem: TriviaItem) {

    this.game.AddItem(newItem);
  }
  ngOnInit() {
    if (this.gameId && this.gameId.length > 0) {
      this._questionRepo.getTriviaGame(this.gameId).subscribe(d => this.game = d);
    } else {
      this.game = new TriviaGame(this._identityService.userId);
    }
  }
  save() {
    this._questionRepo.addGame(this.game)
      .subscribe(arg => { this.router.navigate(['/pages/game/list']); });

  }


}
