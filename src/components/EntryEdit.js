import React from 'react';
import {Link} from 'react-router';

import QuestionList from './QuestionList';
import EditableTextContainer from '../containers/EditableTextContainer';

const EntryEdit = ({
  entry,
  game,
  questions,
  answersById,
  onUpdateName,
  onSelectAnswer
}) => {
  return (
    <div>
      <div className="page-header">
        <h1>
          <small>{game.title}</small>
          <EditableTextContainer
            id={entry.id}
            attr="name"
            placeholder="Enter a name for your entry..."
            value={entry.name}
            save={onUpdateName}
            showInput={!entry.name}
          />
        </h1>
        <Link to={`/games/${game.id}`}>Save And Finish</Link>
      </div>
      <QuestionList
        questions={questions}
        answersById={answersById}
        entry={entry}
        isSelectable={true}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

EntryEdit.defaultProps = {
  entry: {},
  game: {},
  questions: [],
  answersById: []
};

EntryEdit.PropTypes = {
  entry: React.PropTypes.object.isRequired,
  game: React.PropTypes.object.isRequired,
  questions: React.PropTypes.array.isRequired,
  answersById: React.PropTypes.object.isRequired,
  onUpdateName: React.PropTypes.func.isRequired,
  onSelectAnswer: React.PropTypes.func.isRequired
};

export default EntryEdit;
