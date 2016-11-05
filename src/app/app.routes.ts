import { AuthGuard } from './auth.guard';
import { GameComponent } from './game/game-component';
import { GameEditorComponent } from './game/game-editor-component';
import { GamesListComponent } from './game/games-list-component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mygames', component: GamesListComponent, canActivate: [AuthGuard] },
  { path: 'editgame/:gameId', component: GameEditorComponent, canActivate: [AuthGuard] },
  { path: 'creategame', component: GameEditorComponent, canActivate: [AuthGuard] },
  { path: 'game/:gameId', component: GameComponent, canActivate: [AuthGuard] },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
  //     return comp.default;
  //   })
  //   ,
  // },
  { path: '**', component: NoContentComponent },
];
