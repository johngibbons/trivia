import React from 'react';
import AnswerContainer from '../containers/AnswerContainer';

export default ({
  answers,
  answersById,
  question
}) => (
  <div className="list-group">
    {answers.map(id => {
      const answer = answersById[id];
      return (
        <AnswerContainer
          key={answer.id}
          {...answer}
          question={question}
        />
      );
    })}
  </div>
);
