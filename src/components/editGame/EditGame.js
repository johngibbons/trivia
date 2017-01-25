import React, { PropTypes } from 'react'
import './EditGame.css'
import { Record, List } from 'immutable';
import { connect } from 'react-redux';
import { updateGame } from '../../actions/game-actions';
import { currentGameSelector } from '../../selectors/games-selector'
import { currentQuestionsSelector } from '../../selectors/questions-selector'

import PageHeading from '../pageHeading/PageHeading';
import AddQuestionButton from './addQuestionButton/AddQuestionButton';
import SavePendingGameButton from './savePendingGameButton/SavePendingGameButton';
import EditQuestionsList from './editQuestionsList/EditQuestionsList';

const EditGame = ({
  game,
  questions,
  onChange
}) => {
  return (
    <div className='EditGame'>
      <PageHeading text={game.name}>
        <AddQuestionButton />
      </PageHeading>
      <SavePendingGameButton
        id={game.id}
        disabled={!questions.size}
      />
      <EditQuestionsList questions={questions} />
    </div>
  )
}

EditGame.propTypes = {
  game: PropTypes.instanceOf(Record),
  questions: PropTypes.instanceOf(List),
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: currentGameSelector(state, ownProps),
    questions: currentQuestionsSelector(state, ownProps)
  }
}

export default connect(mapStateToProps, {
  onChange: updateGame
})(EditGame)
