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
  hasGameStarted,
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
    <div className='container entry'>
      <div className="page-header">
        <h1>
          {!hasGameStarted && currentUser.id === entry.user ?
            <EditableTextContainer
              id={entry.id}
              attr="name"
              placeholder="Enter a name for your entry..."
              value={entry.name}
              save={onUpdateName}
              showInput={!entry.name}
            /> :
            <div>{entry.name}</div>
          }
        </h1>
        {hasGameStarted &&
          `(Rank ${entry.rank})`
        }
        <ScoreBar
          isOwnScore={currentUser.id === entry.user}
          entry={entry}
          correct={correct}
          leader={leader}
          currentPossible={currentPossible}
          totalPossible={totalPossible}
        />
      </div>
      {hasGameStarted || currentUser.id == entry.user ?
        <QuestionList
          questions={questions}
          answersById={answersById}
          entry={entry}
          isSelectable={!hasGameStarted && currentUser.id === entry.user}
          onSelectAnswer={onSelectAnswer}
        />
        :
        <p>Answers hidden until the game starts.</p>
      }
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
