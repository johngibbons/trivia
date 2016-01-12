import React from 'react';
import classNames from 'classnames';

import AnswerIcon from './AnswerIcon';

const AnswerSelectable = ({
  id,
  text,
  question,
  correctAnswer,
  isSelected,
  onSelect
}) => {
  const answerClasses = classNames({
    'selected': isSelected,
    'correct': isSelected && correctAnswer && correctAnswer === id,
    'incorrect': isSelected && correctAnswer && correctAnswer !== id,
    'answer': true,
    'list-group-item': true
  });

  const answerIconClasses = classNames({
    'glyphicon-record': !correctAnswer && isSelected,
    'glyphicon-ok': isSelected && correctAnswer && correctAnswer === id,
    'glyphicon-remove': isSelected && correctAnswer && correctAnswer !== id
  });

  return (
    <a href="#"
      className={answerClasses}
      onClick={(e) => {
        e.preventDefault();
        if (isSelected) {
          onSelect(question, 'correctAnswer', null);
        } else {
          onSelect(question, 'correctAnswer', id);
        }
      }}
    >
      {text}
      {isSelected && <AnswerIcon iconClass={answerIconClasses} />}
    </a>
  );
};

AnswerSelectable.PropTypes = {
  key: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  question: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

export default AnswerSelectable;
