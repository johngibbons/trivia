import React from 'react';

export default ({game, questions, answersById, children}) => {
  return (
    <div className="container">
      {React.cloneElement(children, {game: game, questions: questions, answersById: answersById})}
    </div>
  );
}
