import React from 'react';

const Game = (props) => {
  return (
    <div className="container">
      {React.cloneElement(props.children, {...props})}
    </div>
  );
};

export default Game;
