import React, { PropTypes } from "react";
import "./EditValuesModal.css";
import { connect } from "react-redux";
import { closeModal } from "../../../actions/ui-actions";
import { saveGroupValues } from "../../../actions/group-actions";
import Group from "../../../models/Group";
import { groupCategoriesSelector } from "../../../selectors/categories-selector";
import { Seq } from "immutable";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import EditValueField from "./editValueField/EditValueField";

const EditValuesModal = ({ open, group, categories, onClickSave, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Category Values</DialogTitle>
      <form className="EditValuesModal--form-container">
        {categories.map((category, i) => {
          return <EditValueField key={i} category={category} group={group} />;
        })}
        <Button
          variant="contained"
          color="primary"
          className="EditValuesModal--save"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onClickSave(group.id);
          }}
        >
          save
        </Button>
      </form>
    </Dialog>
  );
};

EditValuesModal.propTypes = {
  open: PropTypes.bool,
  group: PropTypes.instanceOf(Group),
  categories: PropTypes.instanceOf(Seq),
  onClickSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const {
    ui: { modal },
  } = state;
  return {
    open: modal === "EDIT_VALUES",
    categories: groupCategoriesSelector(state, props),
  };
};

export default connect(mapStateToProps, {
  onClose: closeModal,
  onClickSave: saveGroupValues,
})(EditValuesModal);
