import {Component} from '@angular/core';
import {GamesList} from '../game/games-list-component';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  directives: [GamesList,ROUTER_DIRECTIVES],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
}
