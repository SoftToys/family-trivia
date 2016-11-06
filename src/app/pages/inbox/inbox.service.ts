import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as rx from 'rxjs/Rx';
import * as Models from './inbox.models';

@Injectable()
export class InboxService {
  dMap: Map<string, Models.InboxMessage>;
  constructor(private _http: Http) {
    //DUMMY DATA:
    let branch = <Models.Branch>{
      address: 'אבן גבירול 54 תל אביב', name: 'סניף אבן גבירול', phone: '3432432423'
    };
    let business = <Models.Business>{
      name: 'Cafe Cafe', iconName: 'assets/img/app/profile/Nasta.png'
    };

    let reward1 = new Models.Reward();
    reward1.points = 3;
    reward1.promoTxt = 'Buy 6 coffees get one free';
    reward1.targetPoints = 6;
    reward1.branches = [{ name: 'תל השומר' }, { name: 'אום אל שוקשוק' }];
    reward1.claimToken = '';
    reward1.business = { iconName: 'ilans', name: 'אילנס' };

    let reward2 = new Models.Reward();
    reward2.points = 10;
    reward2.promoTxt = 'Buy 9 coffees get one free';
    reward2.targetPoints = 10;
    reward2.branches = null;
    reward2.claimToken = 'some token..';
    reward2.business = { iconName: 'ilans', name: 'אילנס' };

    let receipt = new Models.Receipt();
    receipt.currency = 'שח';
    receipt.total = 10;
    receipt.receiptId = '75A10BDB-2A1B-43C1-A3EF-0000120CD250';
    receipt.business = business;
    receipt.branch = branch;
    receipt.starred = false;
    receipt.receiptItems = [
      <Models.ReceiptItem>{ name: 'קפה', price: 10, quantity: 2, total: 20 },
      <Models.ReceiptItem>{ name: 'אספרסו', price: 4, quantity: 1, total: 4 }
    ];

    let inboxMessage = new Models.InboxMessage();
    inboxMessage.bodyItem = reward1;
    inboxMessage.branch = branch;
    inboxMessage.business = business;
    inboxMessage.date = Date.now();
    inboxMessage.name = 'Cafe Cafe';
    inboxMessage.id = '11';
    inboxMessage.icon = 'assets/img/app/profile/Nasta.png';



    let inboxMessage2 = new Models.InboxMessage();
    inboxMessage2.bodyItem = receipt;
    inboxMessage2.branch = <Models.Branch>{
      address: 'אבן כביר 54 תל אביב', name: 'סניף אבן כביר', phone: '1111111111'
    };
    inboxMessage2.business = <Models.Business>{
      name: 'cofix', iconName: 'assets/img/app/profile/Nasta.png'
    };
    inboxMessage2.date = Date.now();
    inboxMessage2.name = 'cofix';
    inboxMessage2.id = '12';
    inboxMessage2.icon = 'assets/img/app/profile/Nasta.png';

    let inboxMessage3 = new Models.InboxMessage();
    inboxMessage3.bodyItem = reward2;
    inboxMessage3.branch = branch;
    inboxMessage3.business = business;
    inboxMessage3.date = Date.now();
    inboxMessage3.name = 'Cafe Cafe';
    inboxMessage3.id = '13';
    inboxMessage3.icon = 'assets/img/app/profile/Nasta.png';

    this.dMap = new Map<string, Models.InboxMessage>();
    this.dMap.set(inboxMessage.id, inboxMessage);
    this.dMap.set(inboxMessage2.id, inboxMessage2);
    this.dMap.set(inboxMessage3.id, inboxMessage3);

  }

  public getRewards(): Promise<Models.Reward[]> {
    let reward1 = new Models.Reward();
    reward1.points = 3;
    reward1.promoTxt = 'reward2 text';
    reward1.targetPoints = 10;
    reward1.branches = [{ name: 'תל השומר' }, { name: 'אום אל שוקשוק' }];
    reward1.claimToken = null;
    reward1.business = { iconName: 'ilans', name: 'אילנס' };

    let reward2 = new Models.Reward();
    reward2.points = 10;
    reward2.promoTxt = 'reward2 text';
    reward2.targetPoints = 10;
    reward2.branches = null;
    reward2.claimToken = 'SOME TOMKEN..';
    reward2.business = { iconName: 'cafecafe', name: 'cafe  cafe' };


    let dummyData = [];
    dummyData.push(reward1);
    dummyData.push(reward2);

    return Promise.resolve(dummyData);
  }

  public getInbox(label?: string): Promise<Models.InboxMessage[]> {
    let data: Models.InboxMessage[] =
      Array.from(this.dMap.entries()).map<Models.InboxMessage>(([k, v]) => v);
    return Promise.resolve(data);
  }

  public getInboxItemById(id: string) {
    let item: Models.InboxMessage = this.dMap.get(id);
    return Promise.resolve(item);

  }
  public getTabs(): Promise<Models.InboxTab[]> {
    let tabs: Models.InboxTab[] = [{
      label: 'inbox',
      name: 'Inbox',
      newItems: 7
    }, {
      label: 'sent',
      name: 'Sent Mail'
    }, {
      label: 'important',
      name: 'Important'
    }, {
      label: 'draft',
      name: 'Draft',
      newItems: 2
    }, {
      label: 'spam',
      name: 'Spam'
    }, {
      label: 'trash',
      name: 'Trash'
    }];

    return Promise.resolve(tabs);
  }

}

