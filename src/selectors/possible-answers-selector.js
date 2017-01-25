import { createSelector } from 'reselect';
import { currentQuestionSelector } from './questions-selector';

const possibleAnswersSelector = state => state.answers;

export const currentPossibleAnswersSelector = createSelector(
  currentQuestionSelector,
  possibleAnswersSelector,
  (question, answers) => question.possible_answers.map(id => answers.get(id))
);
