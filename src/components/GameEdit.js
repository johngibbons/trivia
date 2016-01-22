import React from 'react';
import {Link} from 'react-router';

import EditableTextContainer from '../containers/EditableTextContainer';
import QuestionList from './QuestionList';
import NewQuestionBtn from '../components/NewQuestionBtn';

const GameEdit = ({
  id,
  title,
  questions,
  answersById,
  onUpdate,
  onAddQuestion,
  onRemoveQuestion,
  onUpdateQuestion,
  onAddAnswer,
  onRemoveAnswer,
  onUpdateAnswer
}) => {
  return(
    <div>
      <div className="page-header col-md-12">
        <h1>
          <EditableTextContainer
            id={id}
            attr='title'
            placeholder='Enter a name for your game...'
            value={title}
            showInput={!title}
            save={onUpdate}
          />
        </h1>
        <Link to={`/games/${id}`}>Save and Finish</Link>
      </div>
      <QuestionList
        questions={questions}
        answersById={answersById}
        onRemove={onRemoveQuestion}
        onUpdate={onUpdateQuestion}
        onAddAnswer={onAddAnswer}
        onRemoveAnswer={onRemoveAnswer}
        onUpdateAnswer={onUpdateAnswer}
        isEditable={true}
      />
      <NewQuestionBtn save={onAddQuestion}/>
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
