import React from 'react';

export default (props) => {
  return (
    <div className="container">
      {React.cloneElement(props.children, {...props})}
    </div>
  );
};
