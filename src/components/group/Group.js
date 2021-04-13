import React, { PropTypes } from "react";
import { connect } from "react-redux";
import "./Group.css";
import { List, Seq } from "immutable";
import GroupModel from "../../models/Group";
import Game from "../../models/Game";
import {
  rankedGroupEntriesSelector,
  winningEntriesSelector,
} from "../../selectors/entries-selector";
import { currentGroupSelector } from "../../selectors/group-selector";
import { currentGroupCategoriesSelector } from "../../selectors/categories-selector";
import {
  groupGameStartedSelector,
  groupGameEndedSelector,
  groupGameSelector,
} from "../../selectors/games-selector";
import { openModal } from "../../actions/ui-actions";

import Button from "@material-ui/core/Button";
import NewEntryModal from "../../components/entry/newEntryModal/NewEntryModal";
import PageHeading from "../pageHeading/PageHeading";
import EntriesTable from "./entriesTable/EntriesTable";
import EditValuesModal from "./editValuesModal/EditValuesModal";
import WinnerBanner from "./winnerBanner/WinnerBanner";

const Group = ({
  currentUser,
  group,
  categories,
  game,
  entries,
  winningEntries,
  params,
  gameStarted,
  gameEnded,
  onClickNewEntry,
}) => {
  return (
    <div className="Group">
      <h5 className="Group--game-name">{game.name}</h5>
      <PageHeading text={group.name} />
      {!gameStarted && (
        <Button
          className="Group--create-entry-button"
          color="primary"
          style={{
            color: "#212121",
          }}
          onClick={() => onClickNewEntry("NEW_ENTRY")}
        >
          Create your entry
        </Button>
      )}
      {!gameStarted && currentUser.id === group.admin && (
        <Button
          variant="contained"
          onClick={() => onClickNewEntry("EDIT_VALUES")}
        >
          Edit Category Values
        </Button>
      )}
      {gameEnded && <WinnerBanner winningEntries={winningEntries} />}
      <EntriesTable
        entries={entries}
        categories={categories}
        gameStarted={gameStarted}
      />
      {group.id && <NewEntryModal groupId={params.id} gameId={group.game} />}
      {currentUser.id === group.admin && <EditValuesModal group={group} />}
    </div>
  );
};

Group.propTypes = {
  currentUser: PropTypes.object.isRequired,
  game: PropTypes.instanceOf(Game),
  categories: PropTypes.instanceOf(Seq),
  group: PropTypes.instanceOf(GroupModel),
  entries: PropTypes.instanceOf(List),
  winningEntries: PropTypes.instanceOf(List),
  params: PropTypes.object,
  gameStarted: PropTypes.bool,
  gameEnded: PropTypes.bool,
  onClickNewEntry: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    currentUser: state.currentUser,
    entries: rankedGroupEntriesSelector(state, props),
    group: currentGroupSelector(state, props),
    categories: currentGroupCategoriesSelector(state, props),
    gameStarted: groupGameStartedSelector(state, props),
    gameEnded: groupGameEndedSelector(state, props),
    game: groupGameSelector(state, props),
    winningEntries: winningEntriesSelector(state, props),
  };
};

export default connect(mapStateToProps, {
  onClickNewEntry: openModal,
})(Group);
