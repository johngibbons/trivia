import React, { PropTypes } from "react";
import { connect } from "react-redux";
import "./NewEntryModal.css";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import User from "../../../models/User";

import { closeModal, updateNewEntryName } from "../../../actions/ui-actions";
import { createEntry } from "../../../actions/entry-actions";

const NewEntryModal = ({
  open,
  name,
  groupId,
  gameId,
  currentUser,
  onClose,
  onChange,
  onClickCreate,
}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="create-entry">
      <DialogTitle id="create-entry">Create Your Entry</DialogTitle>
      <form>
        <TextField
          type="text"
          autoFocus
          className="NewEntryModal-name"
          value={name}
          label="Name"
          placeholder="My awesome entry"
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
              onClose();
              onChange("");
              onClickCreate(name, groupId, gameId, currentUser.id);
            }}
          >
            create
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

NewEntryModal.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  groupId: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
  currentUser: PropTypes.instanceOf(User),
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui, currentUser }) => {
  return {
    open: ui.modal === "NEW_ENTRY",
    name: ui.newEntryName,
    currentUser,
  };
};

export default connect(mapStateToProps, {
  onClose: closeModal,
  onChange: updateNewEntryName,
  onClickCreate: createEntry,
})(NewEntryModal);
