import { Routes, RouterModule } from '@angular/router';

import { Inbox } from './inbox.component';
import { InboxList } from './components/list/inboxlist.component';
import { InboxItem } from './components/item/inbox-item.component';
// import { GoogleMaps } from './components/googleMaps/googleMaps.component';
// import { LeafletMaps } from './components/leafletMaps/leafletMaps.component';
// import { LineMaps } from './components/lineMaps/lineMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Inbox,

    children: [
      { path: 'list', component: InboxList },
      { path: 'item', component: InboxItem }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
