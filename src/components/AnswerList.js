import React from 'react';
import Answer from './Answer';
import AnswerEditable from './AnswerEditable';
import AnswerSelectable from './AnswerSelectable';
import classNames from 'classnames';

const AnswerList = ({
  answers,
  question,
  isEditable,
  isSelected,
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

  const getAnswerForContext = (answer) => {
    if (isEditable) {
      return (
        <AnswerEditable
          key={answer.id}
          id={answer.id}
          text={answer.text}
          onUpdate={onUpdateAnswer}
          onRemove={onRemoveAnswer}
        />
      );
    } else if (isSelectable) {
      return (
        <AnswerSelectable
          key={answer.id}
          id={answer.id}
          text={answer.text}
          isSelected={isSelected}
          onSelect={onSelectAnswer}
        />
      );
    } else {
      return (
        <Answer
          key={answer.id}
          id={answer.id}
          text={answer.text}
          isSelected={isSelected}
        />
      );
    }
  }

  return(
    <div className={listClass}>
      {answers.map(answer => {
        return getAnswerForContext(answer);
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
