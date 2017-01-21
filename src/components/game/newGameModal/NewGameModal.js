import React, { PropTypes } from 'react'
import './NewGameModal.css'
import { connect } from 'react-redux';

import { closeModal } from '../../../actions/ui-actions';
import { updatePendingGame, savePendingGame } from '../../../actions/pending-game-actions';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const NewGameModal = ({
  open,
  name,
  onChange,
  onClose
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
          value={name}
          floatingLabelText='Name'
          hintText='What do you want to call your game?'
          onChange={onChange}
        />
        <div>
          <Link to='/games/new' onClick={onClose}>
            <RaisedButton
              primary
              type='submit'
              label='next'
              disabled={!name}
            />
          </Link>
        </div>
      </form>
    </Dialog>
  )
}

NewGameModal.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

const mapStateToProps = ({ ui, pendingGame }) => {
  return {
    open: ui.modal === 'NEW_GAME',
    name: pendingGame.name
  }
}

export default connect(mapStateToProps, {
  onChange: (e, val) => updatePendingGame({name: val}),
  onClose: closeModal
})(NewGameModal)
