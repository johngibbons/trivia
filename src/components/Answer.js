import React from 'react';
import classNames from 'classnames';

import EditableTextContainer from '../containers/EditableTextContainer';
import AnswerIcon from './AnswerIcon';

const Answer = ({
  id,
  text,
  correctAnswer,
  isSelected
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
    <div className={answerClasses}>
      {text}
      {isSelected && <AnswerIcon iconClass={answerIconClasses} />}
    </div>
  );
};

Answer.defaultProps = {
  isSelected: false
};

Answer.PropTypes = {
  key: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool
};

export default Answer;
