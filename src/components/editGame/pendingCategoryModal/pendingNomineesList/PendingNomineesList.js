import React, { PropTypes } from "react";
import "./PendingNomineesList.css";

import { Seq } from "immutable";

import List from "@material-ui/core/List";
import PendingNominee from "./pendingNominee/PendingNominee";

const PendingNomineesList = ({ nominees }) => {
  return (
    <List>
      {nominees.map((nominee, i) => (
        <PendingNominee key={i} nominee={nominee} index={i} />
      ))}
    </List>
  );
};

PendingNomineesList.propTypes = {
  nominees: PropTypes.instanceOf(Seq),
};

export default PendingNomineesList;
