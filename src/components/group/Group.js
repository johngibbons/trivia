import React, { PropTypes } from 'react';
import './Group.css';
import { List } from 'immutable';

const Group = ({
  entries
}) => {
  return (
    entries.map(entry =>
      <div>entry.name</div>)
  )
}

Group.propTypes = {
  entries: PropTypes.instanceOf(List)
}

export default Group
