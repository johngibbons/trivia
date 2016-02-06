import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import {colors} from '../constants';

const EditableText = ({
  hidden,
  type,
  value,
  placeholder,
  startEdit,
  saveEdit,
  cancelEdit
}) => {
  let input;

  return (
    <div style={{
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }}>
      <span
        className='editable'
        style={{cursor: 'pointer'}}
        hidden={!hidden}
        onClick={() => startEdit(input)}
      >
        {value || <span style={{color: colors.grayLight}}>untitled</span>}
      </span>
      <input
        type={type}
        className='form-control'
        placeholder={placeholder}
        ref={el => input = el}
        onKeyPress={(e) => {
          e.persist();
          saveEdit(e, input);
        }}
        hidden={hidden}
        autoFocus
      />
      <SaveOrDeleteBtns
        cancelEdit={cancelEdit}
        save={(e) => saveEdit(e, input)}
        hidden={hidden}
      />
    </div>
  );
};

EditableText.PropTypes = {
  textClasses: React.PropTypes.string.isRequired,
  formClasses: React.PropTypes.string.isRequired,
  btnsClasses: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  startEdit: React.PropTypes.func.isRequired,
  saveEdit: React.PropTypes.func.isRequired,
  cancelEdit: React.PropTypes.func.isRequired
};

export default EditableText;
