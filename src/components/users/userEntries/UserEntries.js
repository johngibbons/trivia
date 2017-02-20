import React, { PropTypes } from 'react'
import './UserEntries.css'
import { connect } from 'react-redux';
import { Seq } from 'immutable';

import { userEntriesSelector } from '../../../selectors/entries-selector';

import PageHeading from '.././../pageHeading/PageHeading';
import UserEntry from './userEntry/UserEntry';

const UserEntries = ({
  entries
}) => {
  return (
    <div className='UserEntries'>
      <PageHeading text='My Entries' />
      <div className='UserEntries--entries-container'>
        {entries.map(entry => {
          return (
            <UserEntry
              key={entry.id}
              entry={entry}
            />
          )
        })}
      </div>
    </div>
  )
}

UserEntries.propTypes = {
  entries: PropTypes.instanceOf(Seq)
}

const mapStateToProps = (state, props) => {
  return {
    entries: userEntriesSelector(state, props)
  }
}

export default connect(mapStateToProps)(UserEntries)
