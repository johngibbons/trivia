import React from 'react';
import {Link} from 'react-router';

import EditableTextContainer from '../containers/EditableTextContainer';
import QuestionList from './QuestionList';

const GameEdit = ({
  id,
  title,
  questions,
  answersById,
  isOwner,
  history,
  onUpdate,
  onAddQuestion,
  onRemoveQuestion,
  onUpdateQuestion,
  onAddAnswer,
  onRemoveAnswer,
  onUpdateAnswer,
  setFlash
}) => {

  return(
    <div className='container game-edit'>
      <QuestionList
        questions={questions}
        answersById={answersById}
        onAdd={onAddQuestion}
        onRemove={onRemoveQuestion}
        onUpdate={onUpdateQuestion}
        onAddAnswer={onAddAnswer}
        onRemoveAnswer={onRemoveAnswer}
        onUpdateAnswer={onUpdateAnswer}
        isEditable={isOwner}
      />
    </div>
);};

GameEdit.defaultProps = {
  questions: []
};

GameEdit.PropTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  questions: React.PropTypes.array,
  onUpdateTitle: React.PropTypes.func.isRequired,
  onAddQuestion: React.PropTypes.func.isRequired,
  onRemoveQuestion: React.PropTypes.func.isRequired,
  onUpdateQuestion: React.PropTypes.func.isRequired,
  onAddAnswer: React.PropTypes.func.isRequired,
  onRemoveAnswer: React.PropTypes.func.isRequired,
  onUpdateAnswer: React.PropTypes.func.isRequired
};

export default GameEdit;
