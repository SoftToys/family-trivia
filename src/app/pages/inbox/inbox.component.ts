import { Component, OnInit } from '@angular/core';
import { InboxService } from './inbox.service';
import { Reward, Business, Branch, InboxMessage, InboxTab } from './inbox.models';
import { LayoutService } from './layout.service';

@Component({
  selector: 'inbox',
  templateUrl: 'inbox.component.html',
  providers: [InboxService],
  styles: [require('./inbox.scss')]
})
export class Inbox implements OnInit {
  tabs: InboxTab[];
  activeTab: string;

  constructor(private _service: InboxService, private layout: LayoutService) {
    this.tabs = [];

  }

  ngOnInit() {
    this._service.getTabs().then(r => {
      console.log(`Got Inbox response !! ${r}`);
      this.tabs = r;
      this.activeTab = r[0].name;
      //setTimeout(() => { this.reloadCharts() }, 2000);
    });

  }

}


/**
 * @author v.lugovsky
 * created on 16.12.2015

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailTabCtrl', MailTabCtrl);

  function MailTabCtrl(composeModal, mailMessages) {

    var vm = this;
    vm.navigationCollapsed = true;
    vm.showCompose = function (subject, to, text) {
      composeModal.open({
        subject: subject,
        to: to,
        text: text
      })
    };

    vm.tabs = mailMessages.getTabs();
  }

})();
 */
