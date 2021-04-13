import React, { PropTypes } from "react";
import "./NewGroupModal.css";
import { connect } from "react-redux";

import { closeModal, updateNewGroupName } from "../../../actions/ui-actions";
import { createGroup } from "../../../actions/group-actions";
import { CURRENT_GAME } from "../../../constants";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const NewGroupModal = ({ open, name, onChange, onClose, onClickCreate }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Group</DialogTitle>
      <form>
        <TextField
          type="text"
          autoFocus
          className="NewGroupModal-name"
          value={name}
          label="Name"
          placeholder="My group"
          onChange={(e, val) => onChange(val)}
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!name}
            onClick={(e) => {
              e.preventDefault();
              onClickCreate(name, CURRENT_GAME);
            }}
          >
            create
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

NewGroupModal.propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickCreate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui: { modal, newGroupName } }) => {
  return {
    open: modal === "NEW_GROUP",
    name: newGroupName,
  };
};

export default connect(mapStateToProps, {
  onChange: updateNewGroupName,
  onClose: closeModal,
  onClickCreate: createGroup,
})(NewGroupModal);
