import Game from '../../models/Game';
import { Map, List } from 'immutable';

const game = Map({
  'a': new Game({
    id: 'a',
    name: 'Gibbons Academy Awards Party 2017',
    questions: List(['a', 'b', 'c'])
  })
})

export default game;
