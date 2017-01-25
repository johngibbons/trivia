import React, { PropTypes } from 'react'
import './NewGameModal.css'
import { connect } from 'react-redux';

import { closeModal } from '../../../actions/ui-actions';
import { updatePendingGame } from '../../../actions/pending-game-actions';
import { createGame } from '../../../actions/game-actions';
import shortid from 'shortid';
import { Record } from 'immutable';
import { browserHistory } from 'react-router';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const NewGameModal = ({
  open,
  pendingGame,
  onChange,
  onClose,
  onClickCreate
}) => {
  return (
    <Dialog
      open={open}
      title='Create New Game'
      onRequestClose={onClose}
    >
      <form>
        <TextField
          type='text'
          autoFocus
          className='NewGameModal-name'
          value={pendingGame.name}
          floatingLabelText='Name'
          hintText='What do you want to call your game?'
          onChange={(e, val) => onChange({name: val})}
        />
        <div>
          <RaisedButton
            primary
            type='submit'
            label='create'
            disabled={!pendingGame.name}
            onClick={(e) => {
              e.preventDefault();
              onClickCreate({id: pendingGame.id, name: pendingGame.name})
              browserHistory.push(`games/${pendingGame.id}/edit`)
            }}
          />
        </div>
      </form>
    </Dialog>
  )
}

NewGameModal.propTypes = {
  open: PropTypes.bool,
  pendingGame: PropTypes.instanceOf(Record),
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired
}

const mapStateToProps = ({ ui, pendingGame }) => {
  return {
    open: ui.modal === 'NEW_GAME',
    pendingGame
  }
}

export default connect(mapStateToProps, {
  onChange: updatePendingGame,
  onClose: closeModal,
  onClickCreate: createGame
})(NewGameModal)
