import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';

const EditableText = ({
  textClasses,
  formClasses,
  btnsClasses,
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
      <span className={textClasses} onClick={() => {startEdit(input)}}>{value}</span>
      <input
        type={type}
        className={formClasses}
        placeholder={placeholder}
        ref={el => input = el}
        onKeyPress={(e) => {
          e.persist();
          saveEdit(e, input);
        }}
        autoFocus
      />
      <SaveOrDeleteBtns
        className={btnsClasses}
        cancelEdit={cancelEdit}
        save={(e) => {saveEdit(e, input)}}
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
