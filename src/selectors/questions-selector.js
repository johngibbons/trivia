import { createSelector } from 'reselect';
import { currentGameSelector } from './games-selector.js'

const questionSelector = state => state.questions;
export const currentQuestionSelector = (state, props) => state.questions.get(props.question.id)

export const currentQuestionsSelector = createSelector(
  currentGameSelector,
  questionSelector,
  (game, questions) => game && game.questions.map(id => questions.get(id))
)
