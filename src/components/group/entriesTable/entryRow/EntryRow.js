import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import './EntryRow.css'
import Entry from '../../../../models/Entry';
import User from '../../../../models/User';
import { push } from 'react-router-redux';
import {
  entryPossibleScoreSelector
} from '../../../../selectors/categories-selector';
import {
  entryUserSelector,
  entryCompleteSelector
} from '../../../../selectors/entries-selector';
import {
  entryGameStartedSelector
} from '../../../../selectors/games-selector';
import classNames from 'classnames';

import UserAvatar from '../../../users/userAvatar/UserAvatar';


const EntryRow = ({
  entry,
  possibleScore,
  entryComplete,
  gameStarted,
  onClickEntry,
  user
}) => {
  const entryCompleteClasses = classNames(
    'EntriesTable--entry-complete-indicator',
    { 'complete': entryComplete }
  )

  return (
    <tr
      key={entry.id}
      className={'EntriesTable--row'}
      onClick={() => onClickEntry(`/entries/${entry.id}`)}
    >
      <td
        className={'EntriesTable--col rank'}
      >{gameStarted ? entry.rank :
          <div className={entryCompleteClasses} />
      }</td>
      <td
        className={'EntriesTable--col avatar'}
      >
        <UserAvatar user={user} />
      </td>
      <td
        className={'EntriesTable--col'}
      >
        <div className='EntriesTable--entry-name'>{entry.name}</div>
        <div className='EntriesTable--user-name'>{user.name}</div>
      </td>
      <td
        className={'EntriesTable--col'}
      >{entry.score} / {possibleScore}</td>
    </tr>
  )
}

EntryRow.propTypes = {
  user: PropTypes.instanceOf(User),
  entry: PropTypes.instanceOf(Entry),
  possibleScore: PropTypes.number,
  entryComplete: PropTypes.bool,
  gameStarted: PropTypes.bool,
  onClickEntry: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    possibleScore: entryPossibleScoreSelector(state, props),
    user: entryUserSelector(state, props),
    entryComplete: entryCompleteSelector(state, props),
    gameStarted: entryGameStartedSelector(state, props)
  }
}

export default connect(mapStateToProps, {
  onClickEntry: push
})(EntryRow)
