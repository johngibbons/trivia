import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';

export default ({
  questions,
  questionsById,
  onRemove,
  editable,
  entry
}) => {
  return (
    <span>
      {questions.map(id => {
        const question = questionsById[id];
        return (
          <QuestionContainer
            key={id}
            {...question}
            editable={editable}
            entry={entry}
            onRemove={onRemove}
          />
        );
      })}
    </span>
  );
}
