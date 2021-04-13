import React, { PropTypes } from "react";
import "./DeleteButton.css";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteButton = ({ onClick }) => {
  return (
    <IconButton className="DeleteButton" onClick={onClick}>
      <DeleteIcon color="error" />
    </IconButton>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
