import React from 'react';

import EditableText from '../components/EditableText';
import QuestionListContainer from '../containers/QuestionListContainer';
import NewQuestionBtn from '../components/NewQuestionBtn';

export default ({
  title,
  onUpdateTitle,
  questions,
  onAddQuestion
}) => (
  <div className="container">
    <div className="page-header">
      <h1>
        <EditableText
          className='editable-title'
          placeholder="Enter a name for your game..."
          text={title}
          saveInput={onUpdateTitle}
          showInput={true}
        />
      </h1>
    </div>
    <QuestionListContainer
      questions={questions}
    />
    <NewQuestionBtn save={onAddQuestion}/>
  </div>
);
