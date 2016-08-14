import {Component} from '@angular/core';
import {GamesList} from '../game/games-list-component'

@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  directives: [GamesList],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
}
