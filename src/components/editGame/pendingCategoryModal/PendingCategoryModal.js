import React, { PropTypes } from 'react'
import './PendingCategoryModal.css'
import { connect } from 'react-redux';
import { Record, Seq } from 'immutable';
import shortid from 'shortid';

import Game from '../../../models/Game';

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
  game,
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
            value={pendingCategory.name}
            floatingLabelText='Category'
            hintText="What's the category?"
            onChange={(e, val) => onChangeCategory({name: val})}
          />
          <TextField
            type='number'
            className='PendingCategoryModal-point-value
              PendingCategoryModal-input'
            value={pendingCategory.value}
            floatingLabelText='Point Value'
            hintText="How much is this Category worth?"
            onChange={(e, val) => onChangeCategory({value: val})}
          />
        </section>
        <section className='PendingCategoryModal-section'>
          <h5 className='PendingCategoryModal-section-title'>Nominees</h5>
          <TextField
            type='text'
            id='PendingCategoryModal-nominee-input'
            className='PendingCategoryModal-nominee-input
              PendingCategoryModal-input'
            value={pendingNominee.text}
            floatingLabelText='Nominee'
            hintText="Enter a nominee and hit return to save"
            onChange={(e, val) => onChangeNominee({text: val})}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                pendingNominee.text &&
                  onSaveNominee(pendingNominee.set('id', shortid.generate()));
              }
            }}
          />
          <TextField
            type='text'
            className='PendingCategoryModal-nominee-secondary-input
              PendingCategoryModal-input'
            value={pendingNominee.secondaryText}
            floatingLabelText='Secondary Text (Optional)'
            hintText="Enter any secondary text, like a subtitle or hint"
            onChange={(e, val) => onChangeNominee({secondaryText: val})}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                pendingNominee.text &&
                  onSaveNominee(pendingNominee.set('id', shortid.generate()));
                document.getElementById('PendingCategoryModal-nominee-input')
                  .focus();
              }
            }}
          />
          <PendingNomineesList nominees={pendingCategory.nominees.toIndexedSeq()} />
        </section>
        <div>
          <RaisedButton
            primary
            type='submit'
            label='save'
            disabled={!pendingCategory.name
              || !pendingCategory.nominees.size
              || !pendingCategory.value}
            onClick={(e) => {
              e.preventDefault();
              onClickSave(pendingCategory
                .set('id', shortid.generate()), game.id);
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
  game: PropTypes.instanceOf(Game),
  pendingCategory: PropTypes.instanceOf(Record),
  pendingNominee: PropTypes.instanceOf(Record),
  nominees: PropTypes.instanceOf(Seq),
  onChangeCategory: PropTypes.func.isRequired,
  onChangeNominee: PropTypes.func.isRequired,
  onSaveNominee: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const {
    ui,
    pendingCategory,
    pendingNominee
  } = state;
  return {
    open: ui.modal === 'NEW_CATEGORY',
    pendingNominee,
    pendingCategory
  }
}

export default connect(mapStateToProps, {
  onChangeCategory: updatePendingCategory,
  onChangeNominee: updatePendingNominee,
  onSaveNominee: savePendingNominee,
  onClickSave: savePendingCategory,
  onClose: closeModal
})(PendingCategoryModal)
