import React, { PropTypes } from 'react'
import './PendingGame.css'
import { List } from 'immutable';

import { connect } from 'react-redux';
import { updatePendingGame } from '../../actions/pending-game-actions';
import PageHeading from '../pageHeading/PageHeading';
import AddQuestionButton from './addQuestionButton/AddQuestionButton';
import PendingQuestionsList from './pendingQuestionsList/PendingQuestionsList';

const PendingGame = ({
  name,
  pendingQuestions,
  onChange
}) => {
  return (
    <div className='PendingGame'>
      <PageHeading text={name}>
        <AddQuestionButton />
      </PageHeading>
      <PendingQuestionsList pendingQuestions={pendingQuestions} />
    </div>
  )
}

PendingGame.propTypes = {
  name: PropTypes.string,
  pendingQuestions: PropTypes.instanceOf(List),
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = ({
  pendingGame
}) => {
  return {
    name: pendingGame.name,
    pendingQuestions: pendingGame.questions
  }
}

export default connect(mapStateToProps, {
  onChange: updatePendingGame
})(PendingGame)
