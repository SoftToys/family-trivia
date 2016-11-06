import { Component, OnInit, Input } from '@angular/core';
import { Business, Branch, InboxMessage, InboxTab, Receipt } from '../../inbox.models';

@Component({
  selector: 'receipt',
  templateUrl: 'receipt.component.html',
  styles: [require('./inbox-item.scss')]
})
export class ReceiptComponent implements OnInit {

  @Input() receipt: Receipt;
  constructor() { }

  ngOnInit() { }

}
