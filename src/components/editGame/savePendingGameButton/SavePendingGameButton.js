import React, { PropTypes } from "react";
import "./SavePendingGameButton.css";

import Button from "@material-ui/core/Button";

import { Link } from "react-router";

const SavePendingGameButton = ({ id, disabled }) => (
  <Link to={`/games/${id}`}>
    <Button variant="contained" color="primary" disabled={disabled}>
      Done
    </Button>
  </Link>
);

SavePendingGameButton.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SavePendingGameButton;
