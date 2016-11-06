import { TriviaItem } from './../models/trivia-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
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
