import React from 'react';
import SmRemoveBtn from './SmRemoveBtn';
import EditableTextContainer from '../containers/EditableTextContainer';
import {removeAnswer} from '../actions/index';

export default ({
  text,
  onUpdateText,
  onRemoveAnswer
}) => (
  <a href="#"
    className="answer list-group-item"
    onClick={(e) => e.preventDefault()}
  >
    <EditableTextContainer
      placeholder="Enter an answer..."
      value={text}
      save={onUpdateText}
      showInput={true}
    />
    <SmRemoveBtn
      handleRemove={onRemoveAnswer}
    />
  </a>
);
