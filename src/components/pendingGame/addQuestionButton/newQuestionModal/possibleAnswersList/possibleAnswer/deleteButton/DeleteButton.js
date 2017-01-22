import React, { PropTypes } from 'react'
import './DeleteButton.css'

import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/navigation/cancel';
import { red50, red900 } from 'material-ui/styles/colors';

const DeleteButton = ({
  onClick
}) => {
  return (
    <IconButton onClick={onClick} >
      <DeleteIcon
        color={red50}
        hoverColor={red900}
      />
    </IconButton>
  )
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteButton;
