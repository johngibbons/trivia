import React, { PropTypes } from 'react'
import './AddCategoryButton.css'

import { connect } from 'react-redux';
import { createNewCategory } from '../../../actions/pending-game-actions';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlusIcon from 'material-ui/svg-icons/content/add';
import PendingCategoryModal from '../pendingCategoryModal/PendingCategoryModal';

const AddCategoryButton = ({
  onClick
}) => {
  return (
    <span className='AddCategoryButton'>
      <FloatingActionButton
        onClick={onClick}
      >
        <PlusIcon />
      </FloatingActionButton>
      <PendingCategoryModal />
    </span>
  )
}

AddCategoryButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default connect(undefined, {
  onClick: createNewCategory
})(AddCategoryButton)
