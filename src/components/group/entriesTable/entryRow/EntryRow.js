import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import './EntryRow.css'
import Entry from '../../../../models/Entry';
import { push } from 'react-router-redux';
import { entryScoreSelector } from '../../../../selectors/categories-selector';


const EntryRow = ({
  entry,
  score,
  onClickEntry
}) => {
  return (
    <tr
      key={entry.id}
      className={'EntriesTable--row'}
      onClick={() => onClickEntry(`/entries/${entry.id}`)}
    >
      <td
        className={'EntriesTable--col'}
      >{entry.name}</td>
      <td
        className={'EntriesTable--col'}
      >{score}</td>
    </tr>
  )
}

EntryRow.propTypes = {
  entry: PropTypes.instanceOf(Entry),
  score: PropTypes.number,
  onClickEntry: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    score: entryScoreSelector(state, props)
  }
}

export default connect(mapStateToProps, {
  onClickEntry: push
})(EntryRow)
