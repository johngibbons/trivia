import React, { PropTypes } from 'react'
import './AddCategoryButton.css'

import { connect } from 'react-redux';
import { createNewCategory } from '../../../actions/pending-game-actions';

import Game from '../../../models/Game';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlusIcon from 'material-ui/svg-icons/content/add';
import PendingCategoryModal from '../pendingCategoryModal/PendingCategoryModal';

const AddCategoryButton = ({
  game,
  onClick
}) => {
  return (
    <span className='AddCategoryButton'>
      <FloatingActionButton
        onClick={onClick}
      >
        <PlusIcon />
      </FloatingActionButton>
      <PendingCategoryModal game={game} />
    </span>
  )
}

AddCategoryButton.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  onClick: PropTypes.func.isRequired
}

export default connect(undefined, {
  onClick: createNewCategory
})(AddCategoryButton)
