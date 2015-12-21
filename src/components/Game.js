import React from 'react';

export default ({game, children}) => {
  return (
    <div className="container">
      {React.cloneElement(children, {game: game})}
    </div>
  );
}
