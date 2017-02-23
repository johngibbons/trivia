import React, { PropTypes } from 'react';
import './UserEntriesGroup.css';
import { List } from 'immutable';
import { connect } from 'react-redux';
import Group from '../../../../models/Group';
import Game from '../../../../models/Game';

import { groupFromPropsSelector } from '../../../../selectors/group-selector';
import { entriesGameSelector } from '../../../../selectors/games-selector';

import Paper from 'material-ui/Paper';
import UserEntry from './userEntry/UserEntry';
import { Link } from 'react-router';

const UserEntriesGroup = ({
  group,
  groupObject,
  game
}) => {
  return (
    <Paper
      className='UserEntriesGroup'
    >
      <div className='UserEntriesGroup--game-name'>{game && game.name}</div>
      <Link
        className='UserEntriesGroup--group-name'
        to={`/groups/${groupObject.id}`}
      >
        {groupObject.name}
      </Link>
      <div className='UserEntriesGroup--entries-container'>
        {group.map(entry => {
          return (
            <UserEntry
              key={entry.id}
              group={group}
              entry={entry}
            />
          )
        })}
      </div>
    </Paper>
  )
};

UserEntriesGroup.propTypes = {
  group: PropTypes.instanceOf(List),
  groupObject: PropTypes.instanceOf(Group),
  game: PropTypes.instanceOf(Game)
};

const mapStateToProps = (state, props) => {
  return {
    groupObject: groupFromPropsSelector(state, props),
    game: entriesGameSelector(state, props)
  }
}

export default connect(mapStateToProps)(UserEntriesGroup);
