import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';

export default ({
  questions,
  questionsById,
  onRemove
}) => (
  <span>
    {questions.map(id => {
      const question = questionsById[id];
      return (
        <QuestionContainer
          key={id}
          {...question}
          onRemove={onRemove}
        />
      );
    })}
  </span>
);
