import React from 'react';

export default ({
  className,
  input,
  save,
  cancelEdit
}) => (
  <div
    className={className}
    style={{marginTop: "1em"}}
  >
    <button
      className="btn btn-primary m-t"
      onClick={(e) => {
        e.persist();
        save(e);
      }}
    >
      Save
    </button>
    <span
      className="glyphicon glyphicon-remove cancel"
      style={{
        marginLeft: "1em"
      }}
      onMouseDown={cancelEdit}
    >
    </span>
  </div>
);
