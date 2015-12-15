import React from 'react';
import SmRemoveBtn from './SmRemoveBtn';
import EditableTextContainer from '../containers/EditableTextContainer';
import {removeAnswer} from '../actions/index';

export default ({
  text,
  editable,
  onUpdateText,
  onRemoveAnswer
}) => (
  <a href="#"
    className="answer list-group-item"
    onClick={(e) => e.preventDefault()}
  >
  {editable ?
    <EditableTextContainer
      placeholder="Enter an answer..."
      value={text}
      save={onUpdateText}
      showInput={true}
    /> : text
  }
  {editable &&
    <SmRemoveBtn
      handleRemove={onRemoveAnswer}
    />
  }
  </a>
);
