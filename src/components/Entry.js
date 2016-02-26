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
    <div>
    {(hasGameStarted || currentUser.id == entry.user) &&
      <ScoreBar
        isOwnScore={currentUser.id === entry.user}
        entry={entry}
        correct={correct}
        leader={leader}
        currentPossible={currentPossible}
        totalPossible={totalPossible}
      />}
      <div className='container entry'>
        <div className="page-header">
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
          <p
            style={{textAlign: 'center'}}
            className='alert alert-info alert-game-not-started'
          >Answers hidden until the game starts.</p>
        }
      </div>
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
