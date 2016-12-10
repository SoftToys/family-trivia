import { GameScoreComponent } from './components/game-score-component';
import { AuthGuard } from './../../auth.guard';
import { GameEditorComponent } from './components/game-editor-component';
import { GamePlayComponent } from './components/game-play.component';
import { GameListComponent } from './components/game-list.component';
import { GameComponent } from './game.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: GameListComponent },
      { path: 'play/:gameId', component: GamePlayComponent },
      { path: 'create', component: GameEditorComponent },
      { path: 'edit/:gameId', component: GameEditorComponent },
      { path: 'score', component: GameScoreComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
