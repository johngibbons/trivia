import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import './NewEntryModal.css'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import User from '../../../models/User';

import { closeModal, updateNewEntryName } from '../../../actions/ui-actions';
import { createEntry } from '../../../actions/entry-actions';

const NewEntryModal = ({
  open,
  name,
  groupId,
  gameId,
  currentUser,
  onClose,
  onChange,
  onClickCreate
}) => {
  return (
    <Dialog
      open={open}
      title='Create Your Entry'
      onRequestClose={onClose}
    >
      <form>
        <TextField
          type='text'
          autoFocus
          className='NewEntryModal-name'
          value={name}
          floatingLabelText='Name'
          hintText='What do you want to call your entry?'
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
              onClose();
              onClickCreate(name, groupId, gameId, currentUser.id);
            }}
          />
        </div>
      </form>
    </Dialog>
  )
}

NewEntryModal.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  groupId: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
  currentUser: PropTypes.instanceOf(User),
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired
}

const mapStateToProps = ({ ui, currentUser }) => {
  return {
    open: ui.modal === 'NEW_ENTRY',
    name: ui.newEntryName,
    currentUser
  }
}

export default connect(mapStateToProps, {
  onClose: closeModal,
  onChange: updateNewEntryName,
  onClickCreate: createEntry
})(NewEntryModal)
