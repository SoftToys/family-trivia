import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgaModule } from '../../theme/nga.module';

import { routing } from './inbox.routing';
import { Inbox } from './inbox.component';
import { InboxService } from './inbox.service';
import { InboxList } from './components/list/inboxlist.component';
import { InboxItem } from './components/item/inbox-item.component';
import { ReceiptComponent } from './components/item/receipt.component';
import { RewardComponent } from './components/item/reward.component';
import { LayoutService } from './layout.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    RouterModule,
    routing
  ],
  declarations: [
    Inbox,
    InboxList,
    InboxItem,
    ReceiptComponent,
    RewardComponent
  ],
  providers: [
    LayoutService
    // InboxService
  ]
})
export default class InboxModule { }

