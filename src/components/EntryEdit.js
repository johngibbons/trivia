import React from 'react';

import QuestionListContainer from '../containers/QuestionListContainer';
import EditableTextContainer from '../containers/EditableTextContainer';

export default ({
  game,
  entry,
  onUpdateName
}) => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>
          <small>{game.title}</small>
          <EditableTextContainer
            placeholder="Enter a name for your entry..."
            value={entry.name}
            save={onUpdateName}
            showInput={true}
          />
        </h1>
      </div>
      <QuestionListContainer
        questions={game.questions}
        editable={false}
        entry={entry.id}
      />
    </div>
  );
}
