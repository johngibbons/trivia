import React from 'react';
import Answer from './Answer';
import AnswerEditable from './AnswerEditable';
import AnswerSelectable from './AnswerSelectable';
import classNames from 'classnames';

const AnswerList = ({
  answers,
  question,
  correctAnswer,
  isEditable,
  isSelectable,
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

  function isSelected(answer) {
    if (entry && entry.selections) {
      return entry.selections[question] === answer.id;
    } else if (!entry && correctAnswer) {
      return correctAnswer === answer.id;
    }
    return false;
  }

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
          question={answer.question}
          correctAnswer={correctAnswer}
          text={answer.text}
          isSelected={isSelected(answer)}
          onSelect={onSelectAnswer}
        />
      );
    } else {
      return (
        <Answer
          key={answer.id}
          id={answer.id}
          text={answer.text}
          correctAnswer={correctAnswer}
          isSelected={isSelected(answer)}
        />
      );
    }
  };

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
  entry: React.PropTypes.object,
  isEditable: React.PropTypes.bool.isRequired,
  isSelectable: React.PropTypes.bool.isRequired,
  onRemoveAnswer: React.PropTypes.func,
  onUpdateAnswer: React.PropTypes.func,
  onSelectAnswer: React.PropTypes.func
};

export default AnswerList;
