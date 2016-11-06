import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InboxService } from '../../inbox.service';
import { Business, Branch, InboxMessage, InboxTab } from '../../inbox.models';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'inbox-item',
  templateUrl: 'inbox-item.component.html',
  styles: [require('./inbox-item.scss')]
})
export class InboxItem implements OnInit {

  item: InboxMessage; //= mailMessages.getMessageById($stateParams.id);
  constructor(private _service: InboxService,
    private route: ActivatedRoute,
    private router: Router,
    private layout: LayoutService) {

  }

  ngOnInit() {

    let id = this.route.params['value'].id;
    this._service.getInboxItemById(id).then((r) => { this.item = r; });
  }
  bodyType(): string {
    console.log("this.item.bodyItem:" + this.item.bodyItem);
    return typeof (this.item.bodyItem);

  }

}

/**
 * @author a.demeshko
 * created on 28.12.2015

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailDetailCtrl', MailDetailCtrl);

  function MailDetailCtrl($stateParams, mailMessages) {
    var vm = this;

  }

})();
 */
