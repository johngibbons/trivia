import React, { PropTypes } from 'react'
import './NewGroupModal.css'
import { connect } from 'react-redux'

import { closeModal, updateNewGroupName } from '../../../actions/ui-actions'
import { createGroup } from '../../../actions/group-actions'
import { CURRENT_GAME } from '../../../constants'

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const NewGroupModal = ({ open, name, onChange, onClose, onClickCreate }) => {
  return (
    <Dialog open={open} title='Create New Group' onRequestClose={onClose}>
      <form>
        <TextField
          type='text'
          autoFocus
          className='NewGroupModal-name'
          value={name}
          floatingLabelText='Name'
          hintText='Name your group'
          onChange={(e, val) => onChange(val)}
        />
        <div>
          <RaisedButton
            primary
            type='submit'
            label='create'
            disabled={!name}
            onClick={e => {
              e.preventDefault()
              onClickCreate(name, CURRENT_GAME)
            }}
          />
        </div>
      </form>
    </Dialog>
  )
}

NewGroupModal.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired
}

const mapStateToProps = ({ ui: { modal, newGroupName } }) => {
  return {
    open: modal === 'NEW_GROUP',
    name: newGroupName
  }
}

export default connect(mapStateToProps, {
  onChange: updateNewGroupName,
  onClose: closeModal,
  onClickCreate: createGroup
})(NewGroupModal)
