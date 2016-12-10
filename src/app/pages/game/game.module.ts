import { GameScoreComponent } from './components/game-score-component';
import { StarComponent } from './components/star.component';
import { QuestionsHttpRepositoryService } from './game.service';
import { TriviaItemEditComponent } from './components/trivia-item-edit';
import { TriviaItemPreviewComponent } from './components/trivia-item-preview';
import { GamePlayComponent } from './components/game-play.component';
import { GameEditorComponent } from './components/game-editor-component';
import { GameComponent } from './game.component';

import { GameListComponent } from './components/game-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './game.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
   exports : [
    StarComponent
  ],
  declarations: [
    GameListComponent,
    GameComponent,
    GameEditorComponent,
    GamePlayComponent,
    GameScoreComponent,
    TriviaItemPreviewComponent,
    TriviaItemEditComponent,
    StarComponent 
  ],
  providers: [QuestionsHttpRepositoryService]
})
export default class GameModule { }
