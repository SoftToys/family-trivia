import { Component, OnInit, Input } from '@angular/core';
import { Business, Branch, InboxMessage, InboxTab, Receipt, Reward } from '../../inbox.models';

@Component({
  selector: 'reward',
  templateUrl: 'reward.component.html',
  styles: [require('./inbox-item.scss')]
})
export class RewardComponent implements OnInit {

  pointsArray: number[] = [];
  @Input() reward: Reward;
  constructor() { }

  ngOnInit() {
    this.pointsArray = <number[]>Array(this.reward.targetPoints)
      .fill(0).
      map((x, i) => i + 1); // [1,2,3,4,...]
  }

  private getBranchesNames(): string[] {
    if (this.reward.branches) {
      return this.reward.branches.map((b) => b.name);
    }
    return [];
  }

}
