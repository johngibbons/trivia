export default (entry, game, questionsById) => {

  const selections = entry.selections || [];
  let currScore = 0;

  if (entry.selections && game.answeredOrder) {
    const questionsInOrder = game.answeredOrder;

    return questionsInOrder.map((question) => {
      const selection = selections[question] || {};
      const questionObj = questionsById[question] || {};

      if (selection === questionObj.correctAnswer) {
        currScore += +questionObj.ptValue;
      }
      return currScore;
    });
  } else if (game.answeredOrder){
    const questionsInOrder = game.answeredOrder;

    return questionsInOrder.map((question) => {
      return 0;
    });
  } else {
    return [];
  }
};
