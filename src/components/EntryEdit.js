import React from 'react';

import QuestionListContainer from '../containers/QuestionListContainer';
import EditableTextContainer from '../containers/EditableTextContainer';

export default ({
  questions,
  entry,
  name,
  onUpdateName
}) => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>
          <EditableTextContainer
            placeholder="Enter a name for your entry..."
            value={name}
            save={onUpdateName}
            showInput={true}
          />
        </h1>
      </div>
      <QuestionListContainer
        questions={questions}
        editable={false}
        entry={entry}
      />
    </div>
  );
}
