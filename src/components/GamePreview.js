import React from 'react';

import QuestionList from './QuestionList';

const GamePreview = ({
  id,
  questions,
  answersById
}) => {
  return (
    <div>
      <div className='container game-preview'>
        <QuestionList
          questions={questions}
          answersById={answersById}
        />
      </div>
    </div>
  );
};

export default GamePreview;
