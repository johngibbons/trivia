import React, { PropTypes } from 'react'
import './EntriesTable.css'
import { Seq } from 'immutable';

import EntryRow from './entryRow/EntryRow';


const EntriesTable = ({
  entries
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
            <th className={'EntriesTable--headerCol'}>
              Score
            </th>
          </tr>
        </thead>
        <tbody>
        {entries.map((entry, i) => {
          return (
            <EntryRow
              key={entry.id || i}
              entry={entry}
            />
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

EntriesTable.propTypes = {
  entries: PropTypes.instanceOf(Seq),
}

export default EntriesTable;
