import React, { PropTypes } from 'react'
import './PendingQuestionModal.css'
import { connect } from 'react-redux';
import { List, Record } from 'immutable';

import {
  updatePendingQuestion,
  updatePendingPossibleAnswer,
  savePendingQuestion,
  savePendingPossibleAnswer
} from '../../../actions/pending-game-actions';

import { closeModal } from '../../../actions/ui-actions';

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PendingPossibleAnswersList from './pendingPossibleAnswersList/PendingPossibleAnswersList';
import Divider from 'material-ui/Divider';

const PendingQuestionModal = ({
  open,
  questionText,
  pendingPossibleAnswer,
  pendingQuestion,
  possibleAnswers,
  onChangeQuestion,
  onChangePossibleAnswer,
  onSavePossibleAnswer,
  onClickSave,
  onClose
}) => {
  return (
    <Dialog
      open={open}
      title='Create New Question'
      autoScrollBodyContent
      onRequestClose={onClose}
    >
      <form>
        <h3 className='PendingQuestionModal-section-title'>Question</h3>
        <TextField
          type='text'
          autoFocus
          className='PendingQuestionModal-input'
          value={questionText}
          floatingLabelText='Question'
          hintText="What's the question?"
          onChange={onChangeQuestion}
        />
        <Divider
          style={{
            marginTop: '30px',
            marginBottom: '30px',
            marginLeft: '-24px',
            marginRight: '-24px'
          }}
        />
        <h3 className='PendingQuestionModal-section-title'>Possible Answers</h3>
        <PendingPossibleAnswersList possibleAnswers={possibleAnswers} />
        <TextField
          type='text'
          className='PendingQuestionModal-input'
          value={pendingPossibleAnswer}
          floatingLabelText='Answer'
          hintText="Enter a possible answer and hit return to save"
          onChange={onChangePossibleAnswer}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              pendingPossibleAnswer && onSavePossibleAnswer(pendingPossibleAnswer);
            }
          }}
        />
        <Divider
          style={{
            marginTop: '30px',
            marginBottom: '30px',
            marginLeft: '-24px',
            marginRight: '-24px'
          }}
        />
        <div>
          <RaisedButton
            primary
            type='submit'
            label='save'
            disabled={!questionText || !possibleAnswers.size}
            onClick={(e) => {
              e.preventDefault();
              onClickSave(pendingQuestion);
            }}
          />
          <RaisedButton
            label='cancel'
            className='PendingQuestionModal-cancel-button'
            onClick={onClose}
          />
        </div>
      </form>
    </Dialog>
  )
}

PendingQuestionModal.propTypes = {
  open: PropTypes.bool,
  questionText: PropTypes.string,
  possibleAnswers: PropTypes.instanceOf(List),
  pendingQuestion: PropTypes.instanceOf(Record),
  pendingPossibleAnswer: PropTypes.string,
  onChangeQuestion: PropTypes.func.isRequired,
  onChangePossibleAnswer: PropTypes.func.isRequired,
  onSavePossibleAnswer: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

const mapStateToProps = ({
  ui,
  pendingQuestion,
  pendingPossibleAnswer
}) => {
  return {
    open: ui.modal === 'NEW_QUESTION',
    questionText: pendingQuestion.text,
    pendingPossibleAnswer: pendingPossibleAnswer.text,
    possibleAnswers: pendingQuestion.possible_answers,
    pendingQuestion
  }
}

export default connect(mapStateToProps, {
  onChangeQuestion: (e, val) => updatePendingQuestion({text: val}),
  onChangePossibleAnswer: (e, val) => updatePendingPossibleAnswer({text: val}),
  onSavePossibleAnswer: savePendingPossibleAnswer,
  onClickSave: savePendingQuestion,
  onClose: closeModal
})(PendingQuestionModal)
