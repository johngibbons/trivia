import React, { PropTypes } from "react";
import "./AuthModal.css";
import { connect } from "react-redux";
import { closeModal } from "../../actions/ui-actions";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import FirebaseContainer from "./FirebaseContainer";

const AuthModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="auth-title">
      <DialogTitle id="auth-title">Log In</DialogTitle>
      <FirebaseContainer />
    </Dialog>
  );
};

AuthModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui }) => {
  return {
    open: ui.modal === "AUTH",
  };
};

export default connect(mapStateToProps, {
  onClose: closeModal,
})(AuthModal);
