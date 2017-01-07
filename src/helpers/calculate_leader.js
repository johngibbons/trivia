import calculateScoreHistory from '../helpers/calculate_score_history';

export default (game, entriesById, questionsById) => {
  if (game && game.questions) {
    const entries = Object.keys(entriesById).filter((id) => {
      return entriesById[id].game === game.id;
    });

    const leader = entries.reduce((prev, curr) => {

      const scoreHistory = calculateScoreHistory(entriesById[curr], questionsById);
      const currScore =  scoreHistory[scoreHistory.length - 1];

      if (prev[0] && prev[0].currScore === currScore) {
        prev.push({entry: entriesById[curr].name, currScore: currScore});
        return prev;
      } else if (prev[0] && prev[0].currScore < currScore) {
        return [{entry: entriesById[curr].name, currScore: currScore}];
      } else {
        return prev;
      }
    }, [{entry: null, currScore: 0}]);

    if (leader.length > 1) {
      return {entry: 'multiple', currScore: leader[0].currScore};
    } else {
      return leader[0];
    }
  }
  return {entry: null, currScore: 0};
};
