import React from 'react';
import {Link} from 'react-router';

import QuestionList from './QuestionList';
import EditableTextContainer from '../containers/EditableTextContainer';
import ScoreBar from './ScoreBar';

const Entry = ({
  entry,
  game,
  questions,
  answersById,
  correct,
  leader,
  currentPossible,
  totalPossible,
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
        <ScoreBar
          correct={correct}
          leader={leader}
          currentPossible={currentPossible}
          totalPossible={totalPossible}
        />
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

Entry.defaultProps = {
  entry: {},
  game: {},
  questions: [],
  answersById: []
};

Entry.PropTypes = {
  entry: React.PropTypes.object.isRequired,
  game: React.PropTypes.object.isRequired,
  questions: React.PropTypes.array.isRequired,
  answersById: React.PropTypes.object.isRequired,
  onUpdateName: React.PropTypes.func.isRequired,
  onSelectAnswer: React.PropTypes.func.isRequired
};

export default Entry;
