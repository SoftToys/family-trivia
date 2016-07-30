import { Component, OnInit } from '@angular/core';
import {QuestionsRepositoryService} from '../services/questions-repo-service';
import {Question} from '../models/question';
import {TriviaItem, Status} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import {TriviaGame} from '../models/Trivia-Game';


@Component({
  moduleId: module.id,
  selector: 'game',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./game-component.css'],
  templateUrl: 'game-component.html'
})
export class Game implements OnInit {
  current: number = 0;
  game: TriviaGame;
  /**
   *
   */
  constructor(private _questionRepo: QuestionsRepositoryService) {

  }
  ngOnInit() {
    this._questionRepo.getTriviaGame(1)
      .then((result) => {
        this.game = result;
        this.current = 0;
      });
  }

  get completionPercents() {
    return Math.round((this.current * 100) / this.items.length);
  };

  back() {
    this.current--;
  }

  get items(): TriviaItem[] {
    if (this.game)
      return this.game._items;
    else return [];
  }

  next() {
    this.current++;
  }

  answerAttempt(userAnswer: Answer) {
    if (userAnswer.isCorrect) {
      this.items[this.current].status = Status.AnsweredCorrect;
      if (this.items.length > this.current) {
        this.current++;
      }
    }
    else {
      this.items[this.current].status = Status.AnsweredWrong;
    }
  }
}
