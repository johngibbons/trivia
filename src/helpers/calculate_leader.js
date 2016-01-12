import calculateScore from '../helpers/calculate_score';

export default (game, entriesById, questionsById) => {
  if (game && game.questions) {
    const entries = Object.keys(entriesById).filter((id) => {
      return entriesById[id].game === game.id;
    });

    const leader = entries.reduce((prev, curr) => {
      let score = calculateScore(entriesById[curr], questionsById);
      if (prev[0].score === score) {
        prev.push({entry: entriesById[curr].name, score: score});
        return prev;
      } else if (prev[0].score < score) {
        return [{entry: entriesById[curr].name, score: score}];
      } else {
        return prev;
      }
    }, [{entry: null, score: 0}]);

    if (leader.length > 1) {
      return {entry: 'multiple', score: leader[0].score};
    } else {
      return leader[0];
    }
  }
  return {entry: null, score: 0};
};
