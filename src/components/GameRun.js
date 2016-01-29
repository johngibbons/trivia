import React from 'react';
import {Link} from 'react-router';
import {colors} from '../constants';

import QuestionList from './QuestionList';

const GameRun = ({
  id,
  title,
  questions,
  answersById,
  onUpdateQuestion
}) => {
  return (
    <div>
      <div className="page-header">
        <h1>
          {title || <span style={{color: colors.grayLight}}>untitled</span>}
        </h1>
        <Link to={`/games/${id}`}>View Leaderboard</Link>
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
