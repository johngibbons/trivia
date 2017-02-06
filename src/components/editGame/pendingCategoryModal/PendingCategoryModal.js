import React, { PropTypes } from 'react'
import './PendingCategoryModal.css'
import { connect } from 'react-redux';
import { Record } from 'immutable';
import shortid from 'shortid';

import {
  updatePendingCategory,
  updatePendingNominee,
  savePendingCategory,
  savePendingNominee
} from '../../../actions/pending-game-actions';

import { closeModal } from '../../../actions/ui-actions';

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import PendingNomineesList from './pendingNomineesList/PendingNomineesList';

const PendingCategoryModal = ({
  open,
  gameId,
  pendingNominee,
  pendingCategory,
  onChangeCategory,
  onChangeNominee,
  onSaveNominee,
  onClickSave,
  onClose
}) => {
  return (
    <Dialog
      open={open}
      title='Create New Category'
      autoScrollBodyContent
      onRequestClose={onClose}
    >
      <form>
        <section className='PendingCategoryModal-section'>
          <h5 className='PendingCategoryModal-section-title'>Category</h5>
          <TextField
            type='text'
            autoFocus
            className='PendingCategoryModal-text PendingCategoryModal-input'
            value={pendingCategory.text}
            floatingLabelText='Category'
            hintText="What's the category?"
            onChange={(e, val) => onChangeCategory({text: val})}
          />
          <TextField
            type='number'
            className='PendingCategoryModal-point-value PendingCategoryModal-input'
            value={pendingCategory.point_value}
            floatingLabelText='Point Value'
            hintText="How much is this Category worth?"
            onChange={(e, val) => onChangeCategory({point_value: val})}
          />
        </section>
        <section className='PendingCategoryModal-section'>
          <h5 className='PendingCategoryModal-section-title'>Nominees</h5>
          <TextField
            type='text'
            id='PendingCategoryModal--nominee-input'
            className='PendingCategoryModal--nominee-input PendingCategoryModal-input'
            value={pendingNominee.text}
            floatingLabelText='Nominee'
            hintText="Enter a nominee and hit return to save"
            onChange={(e, val) => onChangeNominee({text: val})}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                pendingNominee.text && onSaveNominee(pendingNominee.set('id', shortid.generate()));
              }
            }}
          />
          <TextField
            type='text'
            className='PendingCategoryModal--nominee-secondary-input PendingCategoryModal-input'
            value={pendingNominee.secondary_text}
            floatingLabelText='Secondary Text (Optional)'
            hintText="Enter any secondary text, like a subtitle or hint"
            onChange={(e, val) => onChangeNominee({secondary_text: val})}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                pendingNominee.text && onSaveNominee(pendingNominee.set('id', shortid.generate()));
                document.getElementById('PendingCategoryModal--nominee-input').focus();
              }
            }}
          />
          <PendingNomineesList nominees={pendingCategory.nominees} />
        </section>
        <div>
          <RaisedButton
            primary
            type='submit'
            label='save'
            disabled={!pendingCategory.text || !pendingCategory.nominees.size || !pendingCategory.point_value}
            onClick={(e) => {
              e.preventDefault();
              onClickSave(pendingCategory.set('id', shortid.generate()), gameId);
            }}
          />
          <RaisedButton
            label='cancel'
            className='PendingCategoryModal-cancel-button'
            onClick={onClose}
          />
        </div>
      </form>
    </Dialog>
  )
}

PendingCategoryModal.propTypes = {
  open: PropTypes.bool,
  gameId: PropTypes.string.isRequired,
  pendingCategory: PropTypes.instanceOf(Record),
  pendingNominee: PropTypes.instanceOf(Record),
  onChangeCategory: PropTypes.func.isRequired,
  onChangeNominee: PropTypes.func.isRequired,
  onSaveNominee: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

const mapStateToProps = ({
  ui,
  pendingCategory,
  pendingNominee,
  pendingGame
}) => {
  return {
    open: ui.modal === 'NEW_CATEGORY',
    pendingNominee,
    pendingCategory,
    gameId: pendingGame.id
  }
}

export default connect(mapStateToProps, {
  onChangeCategory: updatePendingCategory,
  onChangeNominee: updatePendingNominee,
  onSaveNominee: savePendingNominee,
  onClickSave: savePendingCategory,
  onClose: closeModal
})(PendingCategoryModal)
