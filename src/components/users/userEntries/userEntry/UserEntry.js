import React, { PropTypes } from 'react'
import './UserEntry.css'
import { connect } from 'react-redux';
import { entryGroupSelector } from '../../../../selectors/group-selector';

import Entry from '../../../../models/Entry';
import Group from '../../../../models/Group';

import { Link } from 'react-router';
import { Card, CardHeader } from 'material-ui/Card';

const UserEntry = ({
  entry,
  group
}) => {
  return (
    <Link
      to={`/entries/${entry.id}`}
      className='UserEntry'
    >
      <Card>
        <CardHeader
          title={entry.name}
          subtitle={group.name}
        />
      </Card>
    </Link>
  )
}

UserEntry.propTypes = {
  entry: PropTypes.instanceOf(Entry),
  group: PropTypes.instanceOf(Group)
}

const mapStateToProps = (state, props) => {
  return {
    group: entryGroupSelector(state, props)
  }
}

export default connect(mapStateToProps)(UserEntry)
