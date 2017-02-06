import React, { PropTypes } from 'react'
import './PendingNominee.css'

import { connect } from 'react-redux';

import { Record } from 'immutable'

import { deleteNominee } from '../../../../../actions/pending-game-actions';

import { ListItem } from 'material-ui/List';
import DeleteButton from './deleteButton/DeleteButton';

const PendingNominee = ({
  nominee,
  index,
  onDelete
}) => {
  return (
    <ListItem
      disabled
      className='PendingNominee'
      primaryText={nominee.text}
      secondaryText={nominee.secondary_text}
      rightIconButton={ <DeleteButton onClick={() => onDelete(index)} /> }
    />
  )
}

PendingNominee.propTypes = {
  nominee: PropTypes.instanceOf(Record).isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default connect(undefined, {
  onDelete: deleteNominee
})(PendingNominee)
