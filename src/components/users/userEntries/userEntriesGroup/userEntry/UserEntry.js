import React, { PropTypes } from "react";
import "./UserEntry.css";

import Entry from "../../../../../models/Entry";

import { Link } from "react-router";

const UserEntry = ({ entry }) => {
  return (
    <Link to={`/entries/${entry.id}`} className="UserEntry">
      {entry.name}
    </Link>
  );
};

UserEntry.propTypes = {
  entry: PropTypes.instanceOf(Entry),
};

export default UserEntry;
