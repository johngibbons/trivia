import React, { PropTypes } from 'react'
import './PendingQuestionModal.css'
import { connect } from 'react-redux';
import { Record } from 'immutable';
import shortid from 'shortid';

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

const PendingQuestionModal = ({
  open,
  gameId,
  pendingPossibleAnswer,
  pendingQuestion,
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
        <section className='PendingQuestionModal-section'>
          <h5 className='PendingQuestionModal-section-title'>Question</h5>
          <TextField
            type='text'
            autoFocus
            className='PendingQuestionModal-text PendingQuestionModal-input'
            value={pendingQuestion.text}
            floatingLabelText='Question'
            hintText="What's the question?"
            onChange={(e, val) => onChangeQuestion({text: val})}
          />
          <TextField
            type='number'
            className='PendingQuestionModal-point-value PendingQuestionModal-input'
            value={pendingQuestion.point_value}
            floatingLabelText='Point Value'
            hintText="How much is this question worth?"
            onChange={(e, val) => onChangeQuestion({point_value: val})}
          />
        </section>
        <section className='PendingQuestionModal-section'>
          <h5 className='PendingQuestionModal-section-title'>Possible Answers</h5>
          <TextField
            type='text'
            id='PendingQuestionModal-possible-answer-input'
            className='PendingQuestionModal-possible-answer-input PendingQuestionModal-input'
            value={pendingPossibleAnswer.text}
            floatingLabelText='Answer'
            hintText="Enter a possible answer and hit return to save"
            onChange={(e, val) => onChangePossibleAnswer({text: val})}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                pendingPossibleAnswer.text && onSavePossibleAnswer(pendingPossibleAnswer.set('id', shortid.generate()));
              }
            }}
          />
          <TextField
            type='text'
            className='PendingQuestionModal-possible-answer-secondary-input PendingQuestionModal-input'
            value={pendingPossibleAnswer.secondary_text}
            floatingLabelText='Secondary Text (Optional)'
            hintText="Enter any secondary text, like a subtitle or hint"
            onChange={(e, val) => onChangePossibleAnswer({secondary_text: val})}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                pendingPossibleAnswer.text && onSavePossibleAnswer(pendingPossibleAnswer.set('id', shortid.generate()));
                document.getElementById('PendingQuestionModal-possible-answer-input').focus();
              }
            }}
          />
          <PendingPossibleAnswersList possibleAnswers={pendingQuestion.possible_answers} />
        </section>
        <div>
          <RaisedButton
            primary
            type='submit'
            label='save'
            disabled={!pendingQuestion.text || !pendingQuestion.possible_answers.size || !pendingQuestion.point_value}
            onClick={(e) => {
              e.preventDefault();
              onClickSave(pendingQuestion.set('id', shortid.generate()), gameId);
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
  gameId: PropTypes.string.isRequired,
  pendingQuestion: PropTypes.instanceOf(Record),
  pendingPossibleAnswer: PropTypes.instanceOf(Record),
  onChangeQuestion: PropTypes.func.isRequired,
  onChangePossibleAnswer: PropTypes.func.isRequired,
  onSavePossibleAnswer: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

const mapStateToProps = ({
  ui,
  pendingQuestion,
  pendingPossibleAnswer,
  pendingGame
}) => {
  return {
    open: ui.modal === 'NEW_QUESTION',
    pendingPossibleAnswer,
    pendingQuestion,
    gameId: pendingGame.id
  }
}

export default connect(mapStateToProps, {
  onChangeQuestion: updatePendingQuestion,
  onChangePossibleAnswer: updatePendingPossibleAnswer,
  onSavePossibleAnswer: savePendingPossibleAnswer,
  onClickSave: savePendingQuestion,
  onClose: closeModal
})(PendingQuestionModal)
