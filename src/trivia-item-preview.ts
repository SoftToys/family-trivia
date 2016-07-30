import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../models/question';
import {TriviaItem, Status} from '../models/Trivia-Item';
import {Answer} from '../models/answer';
import {TriviaGame} from '../models/Trivia-Game';

@Component({
  moduleId: module.id,
  selector: 'trivia-item-preview',
  template: `<div>{{item._question.txt}}</div>`
})
export class TriviaItemPreviewComponent implements OnInit {

  @Input() item: TriviaItem;
  constructor() {

  }

  ngOnInit() {
  }


}
