export default (entries) => {

  if (!entries[0] || !entries[0].scoreHistory || !entries[0].scoreHistory.length) {
    return entries;
  }

  const currEntries = entries || [];
  const firstEntry = currEntries[0] || {};
  const scoreHistory = firstEntry.scoreHistory || [];

  const sortedEntriesPerRound = scoreHistory.map((score, i) => {
    return currEntries.slice().sort((entryA, entryB) => {
      return entryB.scoreHistory[i] - entryA.scoreHistory[i];
    });
  });

  return sortedEntriesPerRound.reduce((acc, roundEntries, i) => {
    let rank = 1;

    const a = roundEntries.map((entry, j) => {
      const currAcc = acc.filter(accEntry => accEntry.id === entry.id)[0] || {};
      if (j === 0) {
        //top score, so auto rank of 1
        return {...entry, rankHistory: [...currAcc.rankHistory || [], 1]};
      } else {
        if (entry.scoreHistory[i] < roundEntries[j - 1].scoreHistory[i]) {
          //score is lower than previous, so rank 1 lower
          rank++;
        }
        return {...entry, rankHistory: [...currAcc.rankHistory || [], rank]};
      }
    });
    return a;
  }, []);

};
