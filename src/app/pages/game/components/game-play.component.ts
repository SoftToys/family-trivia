import { Answer } from './../models/answer';
import { TriviaItem, Status } from './../models/trivia-item';
import { TriviaGame } from './../models/trivia-game';
import { ActivatedRoute } from '@angular/router';
import { QuestionsHttpRepositoryService } from './../game.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'game-play',
  styleUrls: ['./game-play.component.css'],
  templateUrl: './game-play.component.html'
})
export class GamePlayComponent implements OnInit {
  current: number = 0;
  game: TriviaGame;
  gameId: string;
  items: TriviaItem[];
  /**
   *
   */
  constructor(private _questionRepo: QuestionsHttpRepositoryService,
    private _route: ActivatedRoute) {
    this.items = [];
  }
  ngOnInit() {
    this._route.params.subscribe(p => this.gameId = p['gameId']);

    this._questionRepo.getTriviaGame(this.gameId)
      .subscribe(arg => {
        this.game = arg;
        this.current = 0;
        this.items = arg._items;
      });

    // this._questionRepo.getTriviaGame(1)
    //   .then((result) => {
    //     this.game = result;
    //     this.current = 0;
    //   });
  }

  get completionPercents() {
    return Math.round((this.current * 100) / this.items.length);
  };

  back() {
    this.current--;
  }

  // get items(): TriviaItem[] {
  //   if (this.game)
  //     return this.game._items;
  //   else return [];
  // }

  next() {
    this.current++;
  }

  answerAttempt(userAnswer: Answer) {
    if (userAnswer.isCorrect) {
      this.items[this.current].status = Status.AnsweredCorrect;
      if (this.items.length > this.current) {
        this.current++;
      }
    } else {
      this.items[this.current].status = Status.AnsweredWrong;
    }
  }
}
