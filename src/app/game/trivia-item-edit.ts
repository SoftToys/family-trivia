import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Question} from '../models/question';
import {TriviaItem, Status} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import {TriviaGame} from '../models/Trivia-Game';

@Component({
  moduleId: module.id,
  selector: 'trivia-item-edit',
  templateUrl: 'trivia-item-edit.html'
})
export class TriviaItemEditComponent implements OnInit {

  @Input() index: number;
  @Output() itemSaved = new EventEmitter<TriviaItem>();
  @Input() item: TriviaItem;
  currentAnswer: Answer;
  constructor() {
    this.currentAnswer = new Answer('', false);
  }

  ngOnInit() {
    this.item = this.item || TriviaItem.CreateDefault();
  }

  addCurrentAnswer() {
    this.item.addAnswer(this.currentAnswer);
    this.currentAnswer = new Answer('', false);
  }


  save() {
    this.itemSaved.emit(this.item);
    this.item = TriviaItem.CreateDefault();
  }


}
