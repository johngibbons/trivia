export default (game, questionsById) => {
  if (game && game.questions) {
    let questions = game.questions;

    let answered = questions.filter((question) => {
      return questionsById[question].correctAnswer;
    });

    return answered.reduce((acc, curr) => {
      let question = questionsById[curr];
      return acc + +question.ptValue;
    }, 0);
  }
  return 0;
};
