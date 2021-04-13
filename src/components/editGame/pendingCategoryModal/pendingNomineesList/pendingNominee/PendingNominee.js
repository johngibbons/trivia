import React, { PropTypes } from "react";
import "./PendingNominee.css";

import { connect } from "react-redux";

import { Record } from "immutable";

import { deleteNominee } from "../../../../../actions/pending-game-actions";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteButton from "./deleteButton/DeleteButton";

const PendingNominee = ({ nominee, onDelete }) => {
  return (
    <ListItem disabled className="PendingNominee">
      <ListItemText primary={nominee.text} secondary={nominee.secondaryText} />
      <ListItemSecondaryAction>
        <DeleteButton onClick={() => onDelete(nominee)} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

PendingNominee.propTypes = {
  nominee: PropTypes.instanceOf(Record).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default connect(undefined, {
  onDelete: deleteNominee,
})(PendingNominee);
