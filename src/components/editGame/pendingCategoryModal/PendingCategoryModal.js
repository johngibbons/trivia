import React, { PropTypes } from "react";
import "./PendingCategoryModal.css";
import { connect } from "react-redux";
import { Record, Seq } from "immutable";
import shortid from "shortid";

import Game from "../../../models/Game";

import {
  updatePendingCategory,
  updatePendingNominee,
  savePendingCategory,
  savePendingNominee,
} from "../../../actions/pending-game-actions";

import { closeModal } from "../../../actions/ui-actions";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PendingNomineesList from "./pendingNomineesList/PendingNomineesList";

const PendingCategoryModal = ({
  open,
  game,
  pendingNominee,
  pendingCategory,
  onChangeCategory,
  onChangeNominee,
  onSaveNominee,
  onClickSave,
  onClose,
}) => {
  return (
    <Dialog open={open} aria-labelledby="create-category" onClose={onClose}>
      <DialogTitle id="create-category">Create New Category</DialogTitle>
      <form>
        <section className="PendingCategoryModal-section">
          <h5 className="PendingCategoryModal-section-title">Category</h5>
          <TextField
            type="text"
            autoFocus
            className="PendingCategoryModal-text PendingCategoryModal-input"
            value={pendingCategory.name}
            label="Category"
            placeholder="Best Actor"
            onChange={(e, val) => onChangeCategory({ name: val })}
          />
          <TextField
            type="number"
            className="PendingCategoryModal-point-value
              PendingCategoryModal-input"
            value={pendingCategory.value}
            label="Point Value"
            placeholder="10"
            onChange={(e, val) => onChangeCategory({ value: val })}
          />
        </section>
        <section className="PendingCategoryModal-section">
          <h5 className="PendingCategoryModal-section-title">Nominees</h5>
          <TextField
            type="text"
            id="PendingCategoryModal-nominee-input"
            className="PendingCategoryModal-nominee-input
              PendingCategoryModal-input"
            value={pendingNominee.text}
            label="Nominee"
            placeholder="Brad Pitt"
            onChange={(e, val) => onChangeNominee({ text: val })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                pendingNominee.text &&
                  onSaveNominee(pendingNominee.set("id", shortid.generate()));
              }
            }}
          />
          <TextField
            type="text"
            className="PendingCategoryModal-nominee-secondary-input
              PendingCategoryModal-input"
            value={pendingNominee.secondaryText}
            label="Secondary Text (Optional)"
            placeholder="Once Upon a Time In Hollywood"
            onChange={(e, val) => onChangeNominee({ secondaryText: val })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                pendingNominee.text &&
                  onSaveNominee(pendingNominee.set("id", shortid.generate()));
                document
                  .getElementById("PendingCategoryModal-nominee-input")
                  .focus();
              }
            }}
          />
          <PendingNomineesList
            nominees={pendingCategory.nominees.toIndexedSeq()}
          />
        </section>
        <div>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={
              !pendingCategory.name ||
              !pendingCategory.nominees.size ||
              !pendingCategory.value
            }
            onClick={(e) => {
              e.preventDefault();
              onClickSave(
                pendingCategory.set("id", shortid.generate()),
                game.id
              );
            }}
          >
            save
          </Button>
          <Button
            variant="contained"
            className="PendingCategoryModal-cancel-button"
            onClick={onClose}
          >
            cancel
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

PendingCategoryModal.propTypes = {
  open: PropTypes.bool,
  game: PropTypes.instanceOf(Game),
  pendingCategory: PropTypes.instanceOf(Record),
  pendingNominee: PropTypes.instanceOf(Record),
  nominees: PropTypes.instanceOf(Seq),
  onChangeCategory: PropTypes.func.isRequired,
  onChangeNominee: PropTypes.func.isRequired,
  onSaveNominee: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { ui, pendingCategory, pendingNominee } = state;
  return {
    open: ui.modal === "NEW_CATEGORY",
    pendingNominee,
    pendingCategory,
  };
};

export default connect(mapStateToProps, {
  onChangeCategory: updatePendingCategory,
  onChangeNominee: updatePendingNominee,
  onSaveNominee: savePendingNominee,
  onClickSave: savePendingCategory,
  onClose: closeModal,
})(PendingCategoryModal);
