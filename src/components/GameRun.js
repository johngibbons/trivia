import React from 'react';
import {Link} from 'react-router';

import QuestionList from './QuestionList';

const GameRun = ({
  game,
  questions,
  answersById,
  onUpdateQuestion
}) => {
  return (
    <div>
      <div className="page-header">
        <h1>{game.title}</h1>
        <Link to={`/games/${game.id}`}>View Leaderboard</Link>
      </div>
      <QuestionList
        questions={questions}
        answersById={answersById}
        isSelectable={true}
        onSelectAnswer={onUpdateQuestion}
      />
    </div>
  );
};

export default GameRun;
