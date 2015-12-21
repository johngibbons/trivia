import React from 'react';
import AnswerContainer from '../containers/AnswerContainer';
import classNames from 'classnames';

const AnswerList = ({
  answers,
  question,
  isEditable,
  entry,
  entriesById,
  onRemoveAnswer,
  onUpdateAnswer,
  onSelectAnswer
}) => {
  const listClass = classNames({
    'hidden': answers.length ? false : true,
    'list-group': true
  });
  return(
    <div className={listClass}>
      {answers.map(answer => {
        return (
          <Answer
            key={answer.id}
            {...answer}
            entriesById={entriesById}
            entry={entry}
            isEditable={isEditable}
            onRemove={onRemoveAnswer}
            onUpdate={onUpdateAnswer}
            onSelect={onSelectAnswer}
          />
        );
      })}
    </div>
  );
};

AnswerList.PropTypes = {
  answers: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  isEditable: React.PropTypes.bool.isRequired,
  entry: React.PropTypes.string,
  onRemoveAnswer: React.PropTypes.func,
  onUpdateAnswer: React.PropTypes.func,
  onSelectAnswer: React.PropTypes.func
};

export default AnswerList
