import React, { PropTypes } from 'react'
import './UserEntry.css'

import Entry from '../../../../../models/Entry';
import Group from '../../../../../models/Group';

import { Link } from 'react-router';

const UserEntry = ({
  entry
}) => {
  return (
    <Link
      to={`/entries/${entry.id}`}
      className='UserEntry'
    >
        {entry.name}
    </Link>
  )
}

UserEntry.propTypes = {
  entry: PropTypes.instanceOf(Entry),
  group: PropTypes.instanceOf(Group)
}

export default UserEntry;
