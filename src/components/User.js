import React from 'react';

const User = (props) => {
  return (
    <div className="container">
      {React.cloneElement(props.children, {...props})}
    </div>
  );
};

export default User;
