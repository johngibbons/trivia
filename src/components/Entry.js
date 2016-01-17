import React from 'react';
import {Link} from 'react-router';

import QuestionList from './QuestionList';
import EditableTextContainer from '../containers/EditableTextContainer';
import ScoreBar from './ScoreBar';

const Entry = ({
  currentUser,
  entry,
  gameId,
  gameTitle,
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
          <small>{gameTitle}</small>
          <EditableTextContainer
            id={entry.id}
            attr="name"
            placeholder="Enter a name for your entry..."
            value={entry.name}
            save={onUpdateName}
            showInput={!entry.name}
          />
           (Rank {entry.rank})
        </h1>
        <Link to={`/games/${gameId}`}>Save And Finish</Link>
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
  currentUser: React.PropTypes.object,
  entry: React.PropTypes.object.isRequired,
  game: React.PropTypes.object.isRequired,
  questions: React.PropTypes.array.isRequired,
  answersById: React.PropTypes.object.isRequired,
  onUpdateName: React.PropTypes.func.isRequired,
  onSelectAnswer: React.PropTypes.func.isRequired
};

export default Entry;
