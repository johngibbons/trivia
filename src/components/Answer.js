import React from 'react';
import classNames from 'classnames';

import EditableTextContainer from '../containers/EditableTextContainer';
import Icon from './Icon';

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
    'actual': correctAnswer === id && !isSelected,
    'answer': true,
    'list-group-item': true
  });

  let iconType;
  let iconClass;

  if (!correctAnswer && isSelected) {
    iconType = 'selected';
  } else if (isSelected && correctAnswer && correctAnswer === id) {
    iconType = 'correct';
  } else if (isSelected && correctAnswer && correctAnswer !== id) {
    iconType = 'incorrect';
  }

  return (
    <div className={answerClasses}>
      {text}
      {isSelected && <Icon type={iconType} className={`answer-icon icon-${iconType}`} />}
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
