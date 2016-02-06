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
      <Link to={`/games/${id}`}>View Leaderboard</Link>
      <div className='container'>
        <QuestionList questions={questions}
          answersById={answersById}
          isSelectable={true}
          onSelectAnswer={onUpdateQuestion}
        />
      </div>
    </div>
  );
};

export default GameRun;
