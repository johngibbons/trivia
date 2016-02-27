import React from 'react';

import QuestionList from './QuestionList';

const GameRun = ({
  currentUser,
  id,
  questions,
  answersById,
  onSelectAnswer,
  isOwner
}) => {
  return (
    isOwner ?
    <div>
      <div className='container game-run'>
        <QuestionList questions={questions}
          answersById={answersById}
          isSelectable
          onSelectAnswer={onSelectAnswer}
        />
      </div>
    </div>
      :
    window.location = '/'
  );
};

export default GameRun;
