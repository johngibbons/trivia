import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';

export default ({
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
    <div>
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
}
