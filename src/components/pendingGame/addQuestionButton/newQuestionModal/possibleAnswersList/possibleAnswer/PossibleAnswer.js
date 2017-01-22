import React, { PropTypes } from 'react'
import './PossibleAnswer.css'

import { connect } from 'react-redux';

import { Record } from 'immutable'

import { deletePossibleAnswer } from '../../../../../../actions/pending-game-actions';

import { ListItem } from 'material-ui/List';
import DeleteButton from './deleteButton/DeleteButton';

const PossibleAnswer = ({
  possibleAnswer,
  index,
  onDelete
}) => {
  return (
    <ListItem
      className='PossibleAnswer'
      primaryText={possibleAnswer.text}
      rightIconButton={<DeleteButton onClick={() => onDelete(index)} />}
    />
  )
}

PossibleAnswer.propTypes = {
  possibleAnswer: PropTypes.instanceOf(Record).isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default connect(undefined, {
  onDelete: deletePossibleAnswer
})(PossibleAnswer)
