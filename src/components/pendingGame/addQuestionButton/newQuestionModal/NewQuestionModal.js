import React, { PropTypes } from 'react'
import './NewQuestionModal.css'
import { connect } from 'react-redux';
import { List } from 'immutable';

import {
  updatePendingQuestion,
  updatePendingPossibleAnswer,
  savePendingPossibleAnswer
} from '../../../../actions/pending-game-actions';

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PossibleAnswersList from './possibleAnswersList/PossibleAnswersList';

const NewQuestionModal = ({
  open,
  questionText,
  pendingPossibleAnswer,
  possibleAnswers,
  onChangeQuestion,
  onChangePossibleAnswer,
  onSavePossibleAnswer
}) => {
  return (
    <Dialog
      open={open}
      title='Create New Question'
    >
      <form>
        <h3>Question</h3>
        <TextField
          type='text'
          autoFocus
          className='NewQuestionModal-input'
          value={questionText}
          floatingLabelText='Question'
          hintText="What's the question?"
          onChange={onChangeQuestion}
        />
        <h3>Possible Answers</h3>
        <PossibleAnswersList possibleAnswers={possibleAnswers} />
        <TextField
          type='text'
          className='NewQuestionModal-input'
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
        <div>
          <RaisedButton
            primary
            type='submit'
            label='save'
            disabled={!questionText || !possibleAnswers.size}
          />
        </div>
      </form>
    </Dialog>
  )
}

NewQuestionModal.propTypes = {
  open: PropTypes.bool,
  questionText: PropTypes.string,
  possibleAnswers: PropTypes.instanceOf(List),
  pendingPossibleAnswer: PropTypes.string,
  onChangeQuestion: PropTypes.func.isRequired,
  onChangePossibleAnswer: PropTypes.func.isRequired,
  onSavePossibleAnswer: PropTypes.func.isRequired
}

const mapStateToProps = ({
  ui,
  pendingQuestion,
  pendingPossibleAnswer
}) => {
  console.log(pendingQuestion.toJS())
  return {
    open: ui.modal === 'NEW_QUESTION',
    questionText: pendingQuestion.text,
    pendingPossibleAnswer: pendingPossibleAnswer.text,
    possibleAnswers: pendingQuestion.possible_answers
  }
}

export default connect(mapStateToProps, {
  onChangeQuestion: (e, val) => updatePendingQuestion({text: val}),
  onChangePossibleAnswer: (e, val) => updatePendingPossibleAnswer({text: val}),
  onSavePossibleAnswer: savePendingPossibleAnswer
})(NewQuestionModal)
