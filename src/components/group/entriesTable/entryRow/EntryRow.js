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
  entryUserSelector
} from '../../../../selectors/entries-selector';
import Avatar from 'material-ui/Avatar';


const EntryRow = ({
  entry,
  possibleScore,
  onClickEntry,
  user
}) => {
  return (
    <tr
      key={entry.id}
      className={'EntriesTable--row'}
      onClick={() => onClickEntry(`/entries/${entry.id}`)}
    >
      <td
        className={'EntriesTable--col rank'}
      >{entry.rank}</td>
      <td
        className={'EntriesTable--col avatar'}
      >
        <Avatar
          src={user.photoURL}
          className='EntriesTable--avatar'
        />
      </td>
      <td
        className={'EntriesTable--col'}
      >{entry.name}</td>
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
  onClickEntry: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    possibleScore: entryPossibleScoreSelector(state, props),
    user: entryUserSelector(state, props)
  }
}

export default connect(mapStateToProps, {
  onClickEntry: push
})(EntryRow)
