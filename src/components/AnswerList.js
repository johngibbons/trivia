import React from 'react';
import AnswerContainer from '../containers/AnswerContainer';
import classNames from 'classnames';

export default ({
  answers,
  answersById,
  question,
  editable
}) => {
  const listClass = classNames({
    'hidden': answers.length ? false : true,
    'list-group': true
  });
  return(
    <div className={listClass}>
      {answers.map(id => {
        const answer = answersById[id];
        return (
          <AnswerContainer
            key={answer.id}
            {...answer}
            question={question}
            editable={editable}
          />
        );
      })}
    </div>
  );
}
