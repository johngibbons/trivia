import React from 'react';

import Icon from './Icon';

const SaveOrDeleteBtns = ({
  className,
  hidden,
  input,
  save,
  cancelEdit
}) => (
  <div
    className={className}
    style={{marginTop: "1em"}}
    hidden={hidden}
  >
    <button
      className="btn btn-primary m-t"
      onClick={save}
    >
      Save
    </button>
    <Icon
      style={{
        marginLeft: "1em",
        height: '24px',
        width: '24px',
        cursor: 'pointer'
      }}
      type='close'
      onMouseDown={cancelEdit}
    />
  </div>
);

export default SaveOrDeleteBtns;
