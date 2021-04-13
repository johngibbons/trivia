import React, { PropTypes } from "react";
import "./EditGame.css";
import { Record, Seq } from "immutable";
import { connect } from "react-redux";
import { updateGame } from "../../actions/game-actions";
import { currentGameSelector } from "../../selectors/games-selector";
import { currentCategoriesSelector } from "../../selectors/categories-selector";

import PageHeading from "../pageHeading/PageHeading";
import AddCategoryButton from "./addCategoryButton/AddCategoryButton";
import SavePendingGameButton from "./savePendingGameButton/SavePendingGameButton";
import EditCategoriesList from "./editCategoriesList/EditCategoriesList";

const EditGame = ({ game, categories, onChange }) => {
  return (
    <div className="EditGame">
      <PageHeading text={game.name}>
        <AddCategoryButton game={game} />
      </PageHeading>
      <SavePendingGameButton id={game.id} disabled={!categories.size} />
      <EditCategoriesList categories={categories} />
    </div>
  );
};

EditGame.propTypes = {
  game: PropTypes.instanceOf(Record),
  categories: PropTypes.instanceOf(Seq),
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    game: currentGameSelector(state, props),
    categories: currentCategoriesSelector(state, props),
  };
};

export default connect(mapStateToProps, {
  onChange: updateGame,
})(EditGame);
