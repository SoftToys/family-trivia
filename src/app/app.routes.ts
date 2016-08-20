import { provideRouter, RouterConfig } from '@angular/router';

import {About} from './about/about';
import {Home} from './home/home';
import {Game} from './game/game-component';
import {GameEditor} from './game/game-editor-component';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {GamesList} from './game/games-list-component';


const routes: RouterConfig = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: Home },
  { path: 'myGames', component: GamesList },

  { path: 'editGame/:gameId', component: GameEditor },
  { path: 'createGame', component: GameEditor },
  { path: 'game/:gameId', component: Game },
  {
    path: 'github', component: RepoBrowser, children: [
      {
        path: ':org', component: RepoList, children: [
          { path: ':repo', component: RepoDetail },
          { path: '', component: RepoDetail }
        ]
      },
      { path: '', component: RepoList }
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
