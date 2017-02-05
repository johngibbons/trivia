import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './Group.css';
import { Seq } from 'immutable';
import GroupModel from '../../models/Group';
import {
  groupSelector,
  groupEntriesSelector
} from '../../selectors/entries-selector';

const Group = ({
  group,
  entries
}) => {
  return (
    <div className='Group'>
      <h1>{group && group.name}</h1>
      {entries.map(entry =>
        <div key={entry.get('id')}>{entry.name}</div>)}
    </div>
  )
}

Group.propTypes = {
  group: PropTypes.instanceOf(GroupModel),
  entries: PropTypes.instanceOf(Seq)
}

const mapStateToProps = (state, props) => {
  return {
    entries: groupEntriesSelector(state, props),
    group: groupSelector(state, props)
  }
}

export default connect(mapStateToProps)(Group)
