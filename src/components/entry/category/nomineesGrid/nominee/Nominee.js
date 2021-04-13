import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import classNames from "classnames";
import "./Nominee.css";
import { Record } from "immutable";
import { selectNominee } from "../../../../../actions/entry-actions";
import { toggleCorrectNominee } from "../../../../../actions/category-actions";
import { gameStartedSelector } from "../../../../../selectors/games-selector";

import XIcon from "@material-ui/icons/Close";
import OscarIcon from "../../../../OscarIcon";

const Nominee = ({
  router,
  nominee,
  selectedNomineeId,
  correctId,
  hasStarted,
  isMaster,
  onClickNominee,
}) => {
  const answer = correctId === nominee.id;
  const notSelected = !selectedNomineeId || selectedNomineeId !== nominee.id;
  const isSelected = selectedNomineeId === nominee.id;
  const isCorrect = correctId === nominee.id;
  const isAnswered = !!correctId;

  const nomineeClasses = classNames(
    "Nominee",
    { "Nominee--selected": !correctId && selectedNomineeId === nominee.id },
    { "Nominee--unselectable": hasStarted && !isMaster },
    {
      "Nominee--not-selected":
        (selectedNomineeId && notSelected) || (correctId && !selectedNomineeId),
    },
    { "Nominee--answer": answer }
  );

  const nomineeImageClasses = classNames(
    "Nominee__image-bg",
    {
      "Nominee__image-bg--selected":
        !correctId && selectedNomineeId === nominee.id,
    },
    { "Nominee__image-bg--unselectable": hasStarted && !isMaster },
    {
      "Nominee__image-bg--not-selected":
        (selectedNomineeId && notSelected) || (correctId && !selectedNomineeId),
    },
    { "Nominee__image-bg--answer": answer }
  );

  const red = "linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5)),";
  const gold =
    "linear-gradient(rgba(183, 162, 97, 0.5), rgba(183, 162, 97, 0.7)),";
  const doneColor = "rgba(56, 109, 159)";

  const backgroundImage = classNames(
    { [red]: correctId && !notSelected && !answer },
    { [gold]: answer },
    `url(${nominee.imageUrl})`
  );

  return (
    <div
      className={nomineeClasses}
      onClick={() =>
        (!hasStarted || isMaster) && onClickNominee(router.params.id, nominee)
      }
    >
      <div className="Nominee__icon-overlay">
        {isSelected &&
          isAnswered &&
          (isCorrect ? (
            <OscarIcon width="200px" height="200px" fill="hsl(45, 37%, 75%)" />
          ) : (
            <XIcon style={{ width: 200, height: 200 }} color="rgb(255, 0, 0)" />
          ))}
      </div>
      <div className={nomineeImageClasses} style={{ backgroundImage }} />
      <div className="Nominee--text-container">
        <div>
          <div className="Nominee--text">{nominee.text}</div>
          {nominee.secondaryText && (
            <div className="Nominee--secondary-text">
              {nominee.secondaryText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Nominee.propTypes = {
  router: PropTypes.object,
  nominee: PropTypes.instanceOf(Record),
  selectedNomineeId: PropTypes.string,
  correctId: PropTypes.string,
  hasStarted: PropTypes.bool,
  isMaster: PropTypes.bool,
  onClickNominee: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    hasStarted: gameStartedSelector(state, props),
    isMaster: props.nominee.game === props.router.params.id,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClickNominee:
      props.nominee.game === props.router.params.id
        ? (_, nominee) => dispatch(toggleCorrectNominee(nominee))
        : (entryId, nominee) => {
            dispatch(selectNominee(entryId, nominee));
          },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Nominee)
);
