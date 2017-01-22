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
          new PossibleAnswer({ text: 'Ryan Gosling' }),
          new PossibleAnswer({ text: 'Casey Affleck' }),
          new PossibleAnswer({ text: 'Viggo Mortenson' }),
          new PossibleAnswer({ text: 'Andrew Garfield' }),
          new PossibleAnswer({ text: 'Denzel Washington' }),
        ])
      }),
      new Question({
        text: 'Best Actress',
        point_value: 8,
        possible_answers: List([
          new PossibleAnswer({ text: 'Isabelle Huppert' }),
          new PossibleAnswer({ text: 'Amy Adams' }),
          new PossibleAnswer({ text: 'Jessica Chastain' }),
          new PossibleAnswer({ text: 'Ruth Negga' }),
          new PossibleAnswer({ text: 'Natalie Portman' }),
        ])
      })
    ]
  )
});
