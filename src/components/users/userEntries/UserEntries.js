import React, { PropTypes } from 'react'
import './UserEntries.css'
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { userEntriesSelector } from '../../../selectors/entries-selector';

import PageHeading from '.././../pageHeading/PageHeading';
import UserEntriesGroup from './userEntriesGroup/UserEntriesGroup';

const UserEntries = ({
  entriesByGroup
}) => {
  return (
    <div className='UserEntries'>
      <PageHeading text='My Entries' />
      <div className='UserEntries--entries-container'>
        {entriesByGroup.map((group, key) => {
          return (
            <UserEntriesGroup
              key={key}
              group={group}
            />
          )
        })}
      </div>
    </div>
  )
}

UserEntries.propTypes = {
  entriesByGroup: PropTypes.instanceOf(Map)
}

const mapStateToProps = (state, props) => {
  return {
    entriesByGroup: userEntriesSelector(state, props)
  }
}

export default connect(mapStateToProps)(UserEntries)
