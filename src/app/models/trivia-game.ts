
import {Question} from './question';
import {Answer} from './answer';
import {TriviaItem} from './trivia-item';


/**
* name
*/
export class TriviaGame {

  _items: TriviaItem[];
  _owner: string;
  _name: string;

  /**
   *
   */
  constructor(owner: string) {
    this._owner = owner;
    this._items = [];
  }

  /**
   * Adding an Item and return total items count
   */
  public AddItem(item: TriviaItem): number {
    this._items.push(item);
    return this._items.length;
  }

  set Name(name: string) {
    this._name = name;
  }
  get Name() {
    return this._name;
  }


}
