import React from 'react';

import EditableTextContainer from '../containers/EditableTextContainer';
import SmRemoveBtn from './SmRemoveBtn';

const AnswerEditable = ({
  id,
  text,
  onUpdate,
  onRemove
}) => {
  return (
    <div className='answer list-group-item is-clickable'>
      <EditableTextContainer
        id={id}
        attr='text'
        placeholder="Enter an answer..."
        value={text}
        save={onUpdate}
        showInput={!text && true}
      />
      <SmRemoveBtn
        id={id}
        handleRemove={onRemove}
      />
    </div>
  );
};

AnswerEditable.defaultProps = {
  isSelected: false
};

AnswerEditable.PropTypes = {
  key: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool
};

export default AnswerEditable;
