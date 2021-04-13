import React from "react";
import "./AlertBar.css";
import { connect } from "react-redux";
import { hideAlertBar } from "../../actions/ui-actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: ({ isError }) => (isError ? "rgb(220, 0, 0)" : "#b7a261"),
    boxSizing: "border-box",
    left: 0,
    width: "100vw",
    transform: ({ isOpen }) =>
      isOpen ? "translate(0, 0)" : "translate(0, 48px)",
    justifyContent: "center",
  },
});

import Snackbar from "@material-ui/core/Snackbar";

const AlertBar = ({ isOpen, message, onClose, isError }) => {
  const classes = useStyles({ isError, isOpen });
  return (
    <Snackbar
      open={isOpen}
      message={message}
      autoHideDuration={3000}
      onClose={onClose}
      className={classes.root}
    />
  );
};

const mapStateToProps = ({ ui }) => {
  return {
    isOpen: ui.isAlertBarOpen,
    message: ui.alertBarMessage,
    isError: ui.isAlertBarError,
  };
};

export default connect(mapStateToProps, {
  onClose: hideAlertBar,
})(AlertBar);
