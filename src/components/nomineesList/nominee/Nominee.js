import React, { PropTypes } from "react";
import "./Nominee.css";
import { Record } from "immutable";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Nominee = ({ nominee, disabled }) => {
  return (
    <div>
      <ListItem disabled={disabled}>
        <ListItemText
          primary={nominee.text}
          secondary={nominee.secondaryText}
        />
        <img
          src={nominee.imageUrl}
          style={{
            maxWidth: "100%",
          }}
        />
      </ListItem>
    </div>
  );
};

Nominee.propTypes = {
  nominee: PropTypes.instanceOf(Record),
};

export default Nominee;
