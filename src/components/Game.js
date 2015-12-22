import React from 'react';

export default ({game, answersById, children}) => {
  return (
    <div className="container">
      {React.cloneElement(children, {game: game, answersById: answersById})}
    </div>
  );
}
