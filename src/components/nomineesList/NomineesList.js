import React, { PropTypes } from "react";
import "./NomineesList.css";

import { Seq } from "immutable";

import List from "@material-ui/core/List";
import Nominee from "./nominee/Nominee";

const NomineesList = ({ nominees, answerable }) => {
  return (
    <List>
      {nominees.map((nominee, i) => {
        return <Nominee key={i} nominee={nominee} disabled={!answerable} />;
      })}
    </List>
  );
};

NomineesList.propTypes = {
  nominees: PropTypes.instanceOf(Seq),
  answerable: PropTypes.bool,
};

export default NomineesList;
