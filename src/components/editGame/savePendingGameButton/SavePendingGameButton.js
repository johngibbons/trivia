import React, { PropTypes } from 'react'
import './SavePendingGameButton.css'

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const SavePendingGameButton = ({
  id,
  disabled
}) => (
  <Link to={`/games/${id}`}>
    <RaisedButton
      primary
      disabled={disabled}
      label='Done'
    />
  </Link>
)

SavePendingGameButton.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default SavePendingGameButton
