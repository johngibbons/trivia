import React from 'react';
import {Link} from 'react-router';

import EditableTextContainer from '../containers/EditableTextContainer';
import QuestionListContainer from '../containers/QuestionListContainer';
import NewQuestionBtn from '../components/NewQuestionBtn';

export default ({
  id,
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
      <Link to={`/games/${id}`}>Save And Finish</Link>
    </div>
    <QuestionListContainer
      questions={questions}
      onRemove={onRemoveQuestion}
      editable={true}
    />
    <NewQuestionBtn save={onAddQuestion}/>
  </div>
);
