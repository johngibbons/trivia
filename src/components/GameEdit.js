import React from 'react';

import EditableTextContainer from '../containers/EditableTextContainer';
import QuestionListContainer from '../containers/QuestionListContainer';
import NewQuestionBtn from '../components/NewQuestionBtn';

export default ({
  title,
  onUpdateTitle,
  questions,
  onAddQuestion,
  onRemoveQuestion
}) => (
  <div className="container">
    <div className="page-header">
      <h1>
        <EditableTextContainer
          placeholder="Enter a name for your game..."
          value={title}
          save={onUpdateTitle}
          showInput={true}
        />
      </h1>
    </div>
    <QuestionListContainer
      questions={questions}
      onRemove={onRemoveQuestion}
    />
    <NewQuestionBtn save={onAddQuestion}/>
  </div>
);
