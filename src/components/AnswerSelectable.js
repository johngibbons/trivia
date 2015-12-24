import React from 'react';
import classNames from 'classnames';

import SelectedIcon from './SelectedIcon';

const AnswerSelectable = ({
  id,
  text,
  question,
  isSelected,
  onSelect
}) => {

  const answerClasses = classNames({
    'selected': isSelected,
    'answer': true,
    'list-group-item': true
  });

  return (
    <a href="#"
      className={answerClasses}
      onClick={(e) => {
        e.preventDefault();
        onSelect(id, question);
      }}
    >
      {text}
      {isSelected && <SelectedIcon />}
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

export default AnswerSelectable
