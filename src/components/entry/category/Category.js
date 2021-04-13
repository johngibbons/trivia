import React, { PropTypes } from "react";
import "./Category.css";
import { Record, Seq } from "immutable";
import { connect } from "react-redux";
import classNames from "classnames";
import { currentNomineesSelector } from "../../../selectors/nominees-selector";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import NomineesGrid from "./nomineesGrid/NomineesGrid";
import IncorrectIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/CheckCircle";
import OscarIcon from "../../OscarIcon";
import { makeStyles } from "@material-ui/core/styles";

const selectedColor = "rgb(56, 109, 159)";
const unselectedColor = "rgba(66, 66, 66, 0.54)";
const correctColor = "#b7a261";
const incorrectColor = "rgb(255, 0, 0)";

const getStateColor = ({ correctAnswer, selectedId, isCorrect }) =>
  correctAnswer
    ? isCorrect
      ? correctColor
      : incorrectColor
    : selectedId
    ? selectedColor
    : unselectedColor;

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: "18px",
    color: ({ category, selectedNomineeId, isCorrect }) =>
      getStateColor({
        correctAnswer: category.correctAnswer,
        selectedId: selectedNomineeId,
        isCorrect,
      }),
  },
  subheader: {
    fontSize: "15px",
    color: ({ category, selectedNomineeId, isCorrect }) =>
      getStateColor({
        correctAnswer: category.correctAnswer,
        selectedId: selectedNomineeId,
        isCorrect,
      }),
  },
  content: {
    paddingRight: 0,
  },
});

const Category = ({ category, value, nominees, selectedNomineeId }) => {
  const incorrect =
    category.correctAnswer && category.correctAnswer !== selectedNomineeId;
  const isCorrect = category.correctAnswer && !incorrect;
  const classes = useStyles({ category, selectedNomineeId, isCorrect });
  const categoryClasses = classNames("Category", {
    "Category--selected": !!selectedNomineeId,
    "Category--correct": isCorrect,
    "Category--incorrect": incorrect,
  });

  return (
    <Card className={categoryClasses}>
      <CardHeader
        avatar={
          category.correctAnswer ? (
            incorrect ? (
              <IncorrectIcon
                className="Category__status-icon Category__status-icon--incorrect"
                color={incorrectColor}
              />
            ) : (
              <div className="Category__status-icon Category__status-icon--correct">
                <div className="Category__oscar-icon">
                  <OscarIcon width="18px" height="18px" fill="#fff" />
                </div>
              </div>
            )
          ) : selectedNomineeId ? (
            <CheckIcon
              className="Category__status-icon Category__selection-icon Category__complete-icon"
              color={selectedColor}
            />
          ) : (
            <div className="Category__status-icon Category__selection-icon Category__incomplete-icon" />
          )
        }
        title={category.name}
        subheader={`${value} points`}
        classes={classes}
      />
      <NomineesGrid
        categoryId={category.id}
        nominees={nominees}
        selectedNomineeId={selectedNomineeId}
        correctNomineeId={category.correctAnswer}
        isIncorrect={incorrect}
      />
    </Card>
  );
};

Category.propTypes = {
  entry: PropTypes.instanceOf(Record),
  category: PropTypes.instanceOf(Record).isRequired,
  value: PropTypes.number,
  nominees: PropTypes.instanceOf(Seq).isRequired,
  selectedNomineeId: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  return {
    nominees: currentNomineesSelector(state, props),
    selectedNomineeId: props.entry
      ? props.entry.getIn(["selections", props.category.id])
      : props.category.correctAnswer,
  };
};
export default connect(mapStateToProps)(Category);
