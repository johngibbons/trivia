import React from 'react';
import {Link} from 'react-router';

import QuestionList from './QuestionList';
import EditableTextContainer from '../containers/EditableTextContainer';

export default ({
  game,
  entry,
  onUpdateName,
  onSelectAnswer
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
            showInput={!entry.name}
          />
        </h1>
        <Link to={`/games/${game.id}`}>Save And Finish</Link>
      </div>
      <QuestionList
        questions={game.questions}
        editable={false}
        entry={entry.id}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}
