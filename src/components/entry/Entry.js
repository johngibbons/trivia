import React, { PropTypes } from "react";
import "./Entry.css";
import EntryModel from "../../models/Entry";
import Game from "../../models/Game";
import Group from "../../models/Group";
import { connect } from "react-redux";
import {
  currentEntrySelector,
  entryVisibleSelector,
  entryCompleteSelector,
  isEntryOwnerSelector,
  entryGroupSelector,
  entryPercentCompleteSelector,
} from "../../selectors/entries-selector";
import {
  entryGameSelector,
  entryGameStartedSelector,
} from "../../selectors/games-selector";
import { entryCategoriesSelector } from "../../selectors/categories-selector";
import {
  entryScoreSelector,
  entryPossibleScoreSelector,
  gameTotalPossibleSelector,
} from "../../selectors/categories-selector";
import { Seq } from "immutable";

import PageHeading from "../pageHeading/PageHeading";
import Category from "./category/Category";
import { Link } from "react-router";
import WarningIcon from "@material-ui/icons/Warning";

const Entry = ({
  entry,
  game,
  group,
  categories,
  completionPercentage,
  score,
  possible,
  isVisible,
  isComplete,
  hasStarted,
  totalPossible,
}) => {
  return (
    <div>
      <div
        className="Entry--score-progress-bar"
        style={{
          width: `calc(${possible}/${totalPossible} * 100%)`,
        }}
      />
      <div
        className="Entry--score-progress-bar entry"
        style={{
          width: `calc(${score}/${totalPossible} * 100%)`,
        }}
      />
      <h5 className="Entry--game-name">{game.name}</h5>
      <div className="Entry--title-container">
        <PageHeading text={entry.name}>
          <Link to={`/groups/${entry.group}`} className={"Entry--group-link"}>
            {group.name}
          </Link>
        </PageHeading>
        <div className="Entry--score-container">
          {hasStarted ? (
            <h3 className="Entry--score">{`${score}/${possible} points`}</h3>
          ) : isComplete ? (
            <div className="Entry__status Entry__status--complete">
              Entry complete
            </div>
          ) : (
            entry.selections.count() > 0 && (
              <div className="Entry__status Entry__status--incomplete">
                <WarningIcon
                  className="Entry__status--icon Entry__status--warning-icon"
                  width={50}
                  height={50}
                  htmlColor="#D32F2F"
                />
                Entry incomplete. Scroll down to complete your selections
              </div>
            )
          )}
        </div>
      </div>
      {isVisible ? (
        categories.map((category, i) => {
          return (
            <Category
              key={i}
              category={category}
              value={group.values.get(category.id)}
              entry={entry}
            />
          );
        })
      ) : (
        <h5>Entry not visible until game starts</h5>
      )}
      <div>End of entry</div>
      {!hasStarted &&
        (isComplete ? (
          <div className="Entry__status Entry__status--complete">
            Entry complete
          </div>
        ) : (
          <div className="Entry__status Entry__status--incomplete">
            <WarningIcon
              className="Entry__status--icon Entry__status--warning-icon"
              width={50}
              height={50}
              color="#D32F2F"
            />
            Entry incomplete. Scroll up to complete your selections
          </div>
        ))}
      <Link to={`/groups/${entry.group}`} className={"Entry--group-link"}>
        &#8592; Back to&nbsp;<b>{group.name}</b>
      </Link>
    </div>
  );
};

Entry.propTypes = {
  entry: PropTypes.instanceOf(EntryModel),
  game: PropTypes.instanceOf(Game),
  group: PropTypes.instanceOf(Group),
  categories: PropTypes.instanceOf(Seq),
  possible: PropTypes.number,
  totalPossible: PropTypes.number,
  score: PropTypes.number,
  isVisible: PropTypes.bool,
  isOwner: PropTypes.bool,
  isComplete: PropTypes.bool,
  hasStarted: PropTypes.bool,
};

const mapStateToProps = (state, props) => {
  return {
    entry: currentEntrySelector(state, props),
    game: entryGameSelector(state, props),
    categories: entryCategoriesSelector(state, props),
    score: entryScoreSelector(state, props),
    possible: entryPossibleScoreSelector(state, props),
    completionPercentage: entryPercentCompleteSelector(state, props),
    isVisible: entryVisibleSelector(state, props),
    isComplete: entryCompleteSelector(state, props),
    isOwner: isEntryOwnerSelector(state, props),
    hasStarted: entryGameStartedSelector(state, props),
    group: entryGroupSelector(state, props),
    totalPossible: gameTotalPossibleSelector(state, props),
  };
};

export default connect(mapStateToProps)(Entry);
