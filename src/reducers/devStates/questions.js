import { Question } from '../../models/Question';
import { Map, List } from 'immutable';

export default Map({
  "a": new Question({
       id: 'a',
       text: 'Best Picture',
       point_value: 16,
       possible_answers: List(['k', 'l', 'm', 'n', 'o'])
     }),
  "b": new Question({
       id: 'b',
       text: 'Best Actor',
       point_value: 8,
       possible_answers: List(['a', 'b', 'c', 'd', 'e'])
     }),
  "c": new Question({
       id: 'c',
       text: 'Best Actress',
       point_value: 8,
       possible_answers: List(['f', 'g', 'h', 'i', 'j'])
     })
})
