import React, { PropTypes } from 'react'
import './PendingPossibleAnswer.css'

import { connect } from 'react-redux';

import { Record } from 'immutable'

import { deletePossibleAnswer } from '../../../../../actions/pending-game-actions';

import { ListItem } from 'material-ui/List';
import DeleteButton from './deleteButton/DeleteButton';

const PendingPossibleAnswer = ({
  possibleAnswer,
  index,
  onDelete
}) => {
  return (
    <ListItem
      disabled
      className='PendingPossibleAnswer'
      primaryText={possibleAnswer.text}
      rightIconButton={ <DeleteButton onClick={() => onDelete(index)} /> }
    />
  )
}

PendingPossibleAnswer.propTypes = {
  possibleAnswer: PropTypes.instanceOf(Record).isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default connect(undefined, {
  onDelete: deletePossibleAnswer
})(PendingPossibleAnswer)
