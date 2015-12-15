import React from 'react';
import SmRemoveBtn from './SmRemoveBtn';
import {removeAnswer} from '../actions/index';

export default ({
  text,
  onUpdateText
}) => (
  <a href="#"
    className="list-group-item"
  >
    <EditableText
      placeholder="Enter an answer..."
      text={text}
      saveInput={onUpdateText}
    />
    <SmRemoveBtn
    />
  </a>
);
