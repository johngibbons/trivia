import React, { PropTypes } from "react";
import "./EditCategory.css";
import { Record, Seq } from "immutable";
import { connect } from "react-redux";
import { currentNomineesSelector } from "../../../../selectors/nominees-selector";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import NomineesList from "../../../nomineesList/NomineesList";

const EditCategory = ({ category, nominees }) => {
  return (
    <Card className="EditCategory">
      <CardHeader
        title={category.text}
        subheader={`${category.value} points`}
      />
      <NomineesList nominees={nominees} />
    </Card>
  );
};

EditCategory.propTypes = {
  category: PropTypes.instanceOf(Record).isRequired,
  nominees: PropTypes.instanceOf(Seq).isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    nominees: currentNomineesSelector(state, props),
  };
};
export default connect(mapStateToProps)(EditCategory);
