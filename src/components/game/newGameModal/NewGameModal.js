import React, { PropTypes } from 'react'
import './NewGameModal.css'
import { connect } from 'react-redux';

import {
  closeModal,
  updateNewGameName
} from '../../../actions/ui-actions';
import { createGame } from '../../../actions/game-actions';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const NewGameModal = ({
  open,
  name,
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
          value={name}
          floatingLabelText='Name'
          hintText='What do you want to call your game?'
          onChange={(e, val) => onChange(val)}
        />
        <div>
          <RaisedButton
            primary
            type='submit'
            label='create'
            disabled={!name}
            onClick={(e) => {
              e.preventDefault();
              onClickCreate(name);
            }}
          />
        </div>
      </form>
    </Dialog>
  )
}

NewGameModal.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired
}

const mapStateToProps = ({ ui: { modal, newGameName } }) => {
  return {
    open: modal === 'NEW_GAME',
    name: newGameName
  }
}

export default connect(mapStateToProps, {
  onChange: updateNewGameName,
  onClose: closeModal,
  onClickCreate: createGame
})(NewGameModal)
