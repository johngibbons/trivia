import React, { PropTypes } from "react";
import "./LoginButton.css";
import { connect } from "react-redux";
import { openModal } from "../../../actions/ui-actions";
import { browserHistory } from "react-router";

import Button from "@material-ui/core/Button";

const LoginButton = () => {
  return (
    <Button
      className="LoginButton"
      onClick={() => browserHistory.push("/login")}
    >
      login
    </Button>
  );
};

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default connect(undefined, {
  onClick: openModal,
})(LoginButton);
