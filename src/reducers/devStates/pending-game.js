import { Question } from '../../models/Question';
import { PossibleAnswer } from '../../models/PossibleAnswer';
import { Game } from '../../models/Game';
import { List } from 'immutable';


export default new Game({
  name: 'Gibbons Academy Awards Party 2017',
  questions: List(
    [
      new Question({
        text: 'Best Picture',
        point_value: 16,
        possible_answers: List([
          new PossibleAnswer({ text: 'La La Land' }),
          new PossibleAnswer({ text: 'Lion' }),
          new PossibleAnswer({ text: 'Moonlight' }),
          new PossibleAnswer({ text: 'Hidden Figures' }),
          new PossibleAnswer({ text: 'Manchester by the Sea' }),
        ])
      }),
      new Question({
        text: 'Best Actor',
        point_value: 8,
        possible_answers: List([
          new PossibleAnswer({
            text: 'Ryan Gosling',
            secondary_text: 'La La Land'
          }),
          new PossibleAnswer({
            text: 'Casey Affleck',
            secondary_text: 'Manchester by the Sea'
          }),
          new PossibleAnswer({
            text: 'Viggo Mortenson',
            secondary_text: 'Captain Fantastic'
          }),
          new PossibleAnswer({
            text: 'Andrew Garfield',
            secondary_text: 'Hacksaw Ridge'
          }),
          new PossibleAnswer({
            text: 'Denzel Washington',
            secondary_text: 'Fences'
          }),
        ])
      }),
      new Question({
        text: 'Best Actress',
        point_value: 8,
        possible_answers: List([
          new PossibleAnswer({
            text: 'Isabelle Huppert',
            secondary_text: 'Elle'
          }),
          new PossibleAnswer({
            text: 'Amy Adams',
            secondary_text: 'Arrival'
          }),
          new PossibleAnswer({
            text: 'Jessica Chastain',
            secondary_text: 'Miss Sloane'
          }),
          new PossibleAnswer({
            text: 'Ruth Negga',
            secondary_text: 'Loving'
          }),
          new PossibleAnswer({
            text: 'Natalie Portman',
            secondary_text: 'Jackie'
          }),
        ])
      })
    ]
  )
});
