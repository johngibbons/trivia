export default (entry, questionsById) => {
  if (entry.selections) {
    let selections = entry.selections;

    let total = Object.keys(selections).reduce((prev, curr, i) => {
      if (selections[curr] === questionsById[curr].correctAnswer) {
        return prev + +questionsById[curr].ptValue;
      }
      return prev;
    }, 0);
    return total;
  } else {
    return 0;
  }
};
