export default (game, questionsById) => {
  if (game && game.questions) {
    const questions = game.questions;

    return questions.reduce((acc, curr) => {
      let question = questionsById[curr];
      return acc + +question.ptValue;
    }, 0);
  }
  return 0;
};
