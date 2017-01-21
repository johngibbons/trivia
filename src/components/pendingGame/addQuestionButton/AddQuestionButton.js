import React, { PropTypes } from 'react'
import './AddQuestionButton.css'

import { connect } from 'react-redux';
import { createNewQuestion } from '../../../actions/pending-game-actions';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlusIcon from 'material-ui/svg-icons/content/add';
import NewQuestionModal from './newQuestionModal/NewQuestionModal';

const AddQuestionButton = ({
  onClick
}) => {
  return (
    <span className='AddQuestionButton'>
      <FloatingActionButton
        onClick={onClick}
      >
        <PlusIcon />
      </FloatingActionButton>
      <NewQuestionModal />
    </span>
  )
}

AddQuestionButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default connect(undefined, {
  onClick: createNewQuestion
})(AddQuestionButton)
