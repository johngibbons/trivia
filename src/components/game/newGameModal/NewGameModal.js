import React, { PropTypes } from "react";
import "./NewGameModal.css";
import { connect } from "react-redux";

import { closeModal, updateNewGameName } from "../../../actions/ui-actions";
import { createGame } from "../../../actions/game-actions";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const NewGameModal = ({ open, name, onChange, onClose, onClickCreate }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Game</DialogTitle>
      <form>
        <TextField
          type="text"
          autoFocus
          className="NewGameModal-name"
          value={name}
          label="Name"
          placeholder="My awesome game"
          onChange={(_, val) => onChange(val)}
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!name}
            onClick={(e) => {
              e.preventDefault();
              onClickCreate(name);
            }}
          >
            create
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

NewGameModal.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui: { modal, newGameName } }) => {
  return {
    open: modal === "NEW_GAME",
    name: newGameName,
  };
};

export default connect(mapStateToProps, {
  onChange: updateNewGameName,
  onClose: closeModal,
  onClickCreate: createGame,
})(NewGameModal);
