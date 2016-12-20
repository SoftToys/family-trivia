import { UserScore } from './../models/user-score';
import { QuestionsHttpRepositoryService } from './../game.service';
import { Component, OnInit } from '@angular/core';



@Component(
{
    selector: 'game-score',
    templateUrl: './game-score-component.html'
})

export class GameScoreComponent implements OnInit
{
    usersScore: UserScore[];
    title: string;

constructor(private _questionRepo: QuestionsHttpRepositoryService)
    {

    }
    ngOnInit() {
      //  this.usersScore = this._questionRepo.getUserScores();     
    this._questionRepo.getUserScores()
      .subscribe(arg =>
        this.usersScore = arg
      );
    }

     onRatingClicked(message: string): void {
        this.title = 'test';
    }
}
