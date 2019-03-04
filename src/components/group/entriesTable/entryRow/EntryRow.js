import React, { PropTypes } from "react";
import { connect } from "react-redux";
import "./EntryRow.css";
import Entry from "../../../../models/Entry";
import User from "../../../../models/User";
import { push } from "react-router-redux";
import { entryPossibleScoreSelector } from "../../../../selectors/categories-selector";
import {
  entryUserSelector,
  entryCompleteSelector,
  entryPeoplesChoiceScore
} from "../../../../selectors/entries-selector";
import { entryGameStartedSelector } from "../../../../selectors/games-selector";
import classNames from "classnames";
import { Seq } from "immutable";
import WarningIcon from "material-ui/svg-icons/alert/warning";
import CheckIcon from "material-ui/svg-icons/action/check-circle";

import UserAvatar from "../../../users/userAvatar/UserAvatar";

const EntryRow = ({
  entry,
  possibleScore,
  peoplesChoiceScore,
  categories,
  nominees,
  entryComplete,
  gameStarted,
  onClickEntry,
  user
}) => {
  return (
    <tr
      key={entry.id}
      className={"EntriesTable--row"}
      onClick={() => onClickEntry(`/entries/${entry.id}`)}
    >
      <td className={"EntriesTable--col EntriesTable--col-rank"}>
        {gameStarted ? (
          entry.rank
        ) : entryComplete ? (
          <CheckIcon
            className="EntriesTable__status-icon"
            height="20px"
            width="20px"
            color="#689F38"
          />
        ) : (
          <WarningIcon
            className="EntriesTable__status-icon"
            height="20px"
            width="20px"
            color="#D32F2F"
          />
        )}
      </td>
      <td className={"EntriesTable--col EntriesTable--col-avatar"}>
        <UserAvatar user={user} />
      </td>
      <td className={"EntriesTable--col EntriesTable--col-entry-name"}>
        <div className="EntriesTable--entry-name-container">
          <div className="EntriesTable--entry-name">{entry.name}</div>
          <div className="EntriesTable--user-name">{user.name}</div>
        </div>
      </td>
      <td className={"EntriesTable--col EntriesTable--col-score"}>
        {entry.score} / {possibleScore}
      </td>
      {gameStarted &&
        categories
          .toList()
          .toJS()
          .map(category => {
            const categoryClasses = classNames(
              "EntriesTable--col",
              "EntriesTable--col-category",
              {
                "EntriesTable--col-correct":
                  category.correctAnswer &&
                  category.correctAnswer === entry.selections[category.id]
              },
              {
                "EntriesTable--col-incorrect":
                  category.correctAnswer &&
                  category.correctAnswer !== entry.selections[category.id]
              }
            );
            const selectedNomineeId = entry.selections[category.id];
            const nominee = nominees[selectedNomineeId];
            return (
              nominee && <td className={categoryClasses}>{nominee.text}</td>
            );
          })}
    </tr>
  );
};

EntryRow.propTypes = {
  user: PropTypes.instanceOf(User),
  entry: PropTypes.object,
  categories: PropTypes.instanceOf(Seq),
  possibleScore: PropTypes.number,
  entryComplete: PropTypes.bool,
  gameStarted: PropTypes.bool,
  onClickEntry: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    peoplesChoiceScore: entryPeoplesChoiceScore(state, props),
    possibleScore: entryPossibleScoreSelector(state, props),
    user: entryUserSelector(state, props),
    entryComplete: entryCompleteSelector(state, props),
    gameStarted: entryGameStartedSelector(state, props),
    nominees: state.nominees.toJS()
  };
};

export default connect(
  mapStateToProps,
  {
    onClickEntry: push
  }
)(EntryRow);
