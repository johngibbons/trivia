import React from 'react';
import classNames from 'classnames';

import EditableTextContainer from '../containers/EditableTextContainer';

const Answer = ({
  id,
  text,
  isEditable,
  isSelected,
  onUpdate,
  onRemoveAnswer,
  onSelectAnswer,
  getContextualIcon
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
        !isEditable && onSelectAnswer();
      }}
    >
    {isEditable ?
      <EditableTextContainer
        placeholder="Enter an answer..."
        value={text}
        save={onUpdate}
        showInput={true}
      /> : text
    }
    {getContextualIcon()}
    </a>
  );
};

Answer.defaultProps = {
  isSelected: false
};

Answer.PropTypes = {
  key: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  isEditable: React.PropTypes.bool.isRequired,
  isSelected: React.PropTypes.bool,
  onUpdate: React.PropTypes.func,
  onRemove: React.PropTypes.func,
  onSelect: React.PropTypes.func
};

export default Answer
