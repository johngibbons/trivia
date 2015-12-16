import React from 'react';
import classNames from 'classnames';

import EditableTextContainer from '../containers/EditableTextContainer';

export default ({
  id,
  text,
  editable,
  selected,
  onUpdateText,
  onRemoveAnswer,
  onSelectAnswer,
  getContextualIcon
}) => {
  const answerClasses = classNames({
    'selected': selected,
    'answer': true,
    'list-group-item': true
  });
  return (
    <a href="#"
      className={answerClasses}
      onClick={(e) => {
        e.preventDefault();
        !editable && onSelectAnswer();
      }}
    >
    {editable ?
      <EditableTextContainer
        placeholder="Enter an answer..."
        value={text}
        save={onUpdateText}
        showInput={true}
      /> : text
    }
    {getContextualIcon()}
    </a>
  );
}
