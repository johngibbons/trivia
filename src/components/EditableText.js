import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';

export default ({
  textClasses,
  btnsClasses,
  formClasses,
  value,
  formValue,
  type,
  placeholder,
  startEdit,
  saveEdit,
  updateForm,
  cancelEdit
}) => {
  return (
    <div>
      <span className={textClasses} onClick={startEdit}>{value}</span>
      <input
        type={type}
        value={formValue}
        className={formClasses}
        placeholder={placeholder}
        onChange={updateForm}
        onKeyDown={saveEdit}
        autoFocus
      />
      <SaveOrDeleteBtns
        className={btnsClasses}
        cancelEdit={cancelEdit}
        save={saveEdit}
      />
    </div>
  );
}

