import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import './EntriesTable.css'
import { Seq } from 'immutable';
import { push } from 'react-router-redux';


const EntriesTable = ({
  entries,
  onClickEntry
}) => {
  return (
    <div className={'EntriesTable'}>
      <table
        className={'EntriesTable--table'}
      >
        <thead
          className={'EntriesTable--header'}
        >
          <tr className={'EntriesTable--headerRow'}>
            <th className={'EntriesTable--headerCol'}>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
        {entries.map(entry => {
          return (
            <tr
              key={entry.id}
              className={'EntriesTable--row'}
              onClick={() => onClickEntry(`/entries/${entry.id}`)}
            >
              <td
                className={'EntriesTable--col'}
              >{entry.name}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

EntriesTable.propTypes = {
  entries: PropTypes.instanceOf(Seq),
  onClickEntry: PropTypes.func.isRequired
}

export default connect(null, {
  onClickEntry: push
})(EntriesTable)
