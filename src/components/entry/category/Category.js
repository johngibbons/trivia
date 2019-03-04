import React, { PropTypes } from "react";
import "./Category.css";
import { Record, Seq } from "immutable";
import { connect } from "react-redux";
import classNames from "classnames";
import { currentNomineesSelector } from "../../../selectors/nominees-selector";

import { Card, CardHeader } from "material-ui/Card";
import NomineesGrid from "./nomineesGrid/NomineesGrid";
import IncorrectIcon from "material-ui/svg-icons/navigation/cancel";
import CheckIcon from "material-ui/svg-icons/action/check-circle";
import OscarIcon from "../../OscarIcon";

const Category = ({ category, value, nominees, selectedNomineeId }) => {
  const incorrect =
    category.correctAnswer && category.correctAnswer !== selectedNomineeId;
  const correct = category.correctAnswer && !incorrect;
  const categoryClasses = classNames("Category", {
    "Category--selected": !!selectedNomineeId,
    "Category--correct": correct,
    "Category--incorrect": incorrect
  });

  return (
    <Card className={categoryClasses}>
      <CardHeader
        avatar={
          category.correctAnswer ? (
            incorrect ? (
              <IncorrectIcon
                className="Category__status-icon Category__status-icon--incorrect"
                color="rgb(255, 0, 0)"
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
              color="#689F38"
            />
          ) : (
            <div className="Category__status-icon Category__selection-icon Category__incomplete-icon" />
          )
        }
        backgroundColor="none"
        title={category.name}
        subtitle={`${value} points`}
        titleStyle={{
          fontSize: "18px"
        }}
        titleColor={
          category.correctAnswer
            ? correct
              ? "#b7a261"
              : "rgb(255, 0, 0)"
            : selectedNomineeId
            ? "#689F38"
            : "rgba(66, 66, 66, 0.87)"
        }
        subtitleStyle={{
          fontSize: "15px"
        }}
        subtitleColor={
          category.correctAnswer
            ? correct
              ? "#b7a261"
              : "rgb(255, 0, 0)"
            : selectedNomineeId
            ? "#689F38"
            : "rgba(66, 66, 66, 0.54)"
        }
        style={{
          display: "flex",
          alignItems: "center"
        }}
        textStyle={{
          paddingRight: 0
        }}
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
  selectedNomineeId: PropTypes.string
};

const mapStateToProps = (state, props) => {
  return {
    nominees: currentNomineesSelector(state, props),
    selectedNomineeId: props.entry
      ? props.entry.getIn(["selections", props.category.id])
      : props.category.correctAnswer
  };
};
export default connect(mapStateToProps)(Category);
