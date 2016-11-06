import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { InboxService } from '../../inbox.service';
import { Business, Branch, InboxMessage,  InboxTab } from '../../inbox.models';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'inbox-list',
  templateUrl: 'inboxlist.component.html',
  styles: [require('./listinbox.scss')]

})
export class InboxList implements OnInit {
  inboxMessages: InboxMessage[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: InboxService,
    private layout: LayoutService
  ) {
    this.inboxMessages = [];

    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        let label = this.route.params['value'].label;
        console.log(`list events label: ${label}`);
        this.reloadItems(label);
      }
      console.log(val);
      console.dir(val);
    });
  }
  toggleNav() {
    this.layout.navigationCollapsed = !this.layout.navigationCollapsed;
    return false;
  }
  ngOnInit() {
    let label = this.route.params['value'].label;
    console.log(`list ngOnInit label: ${label}`);
    this.reloadItems(label);
  }

  private reloadItems(label?: string) {
    this._service.getInbox(label).then((r) => { this.inboxMessages = r; });
  }


}


/**
 * @author a.demeshko
 * created on 28.12.2015

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .controller('MailListCtrl', MailListCtrl);

  function MailListCtrl($stateParams, mailMessages) {
    let vm = this;
    vm.messages = mailMessages.getMessagesByLabel($stateParams.label);
    vm.label = $stateParams.label;
  }

})();
 */
