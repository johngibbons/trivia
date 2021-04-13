import React, { PropTypes } from "react";
import "./AddCategoryButton.css";

import { connect } from "react-redux";
import { createNewCategory } from "../../../actions/pending-game-actions";

import Game from "../../../models/Game";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import PendingCategoryModal from "../pendingCategoryModal/PendingCategoryModal";

const AddCategoryButton = ({ game, onClick }) => {
  return (
    <span className="AddCategoryButton">
      <Fab onClick={onClick}>
        <AddIcon />
      </Fab>
      <PendingCategoryModal game={game} />
    </span>
  );
};

AddCategoryButton.propTypes = {
  game: PropTypes.instanceOf(Game).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(undefined, {
  onClick: createNewCategory,
})(AddCategoryButton);
