import React, { PropTypes } from 'react'
import './EntriesTable.css'
import { List } from 'immutable';

import EntryRow from './entryRow/EntryRow';


const EntriesTable = ({
  entries,
  gameStarted
}) => {
  return (
    <div className='EntriesTable'>
      {!gameStarted &&
      <div className='EntriesTable--legend'>
        <span className='complete'>Complete</span>
        <span className='incomplete'>Incomplete</span>
      </div>}
      <table className='EntriesTable--table' >
        <thead className='EntriesTable--header' >
          <tr className='EntriesTable--headerRow'>
            <th className='EntriesTable--headerCol rank'>
            </th>
            <th className='EntriesTable--headerCol avatar'>
            </th>
            <th className='EntriesTable--headerCol'>
              Entry Name
            </th>
            <th className='EntriesTable--headerCol'>
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
  entries: PropTypes.instanceOf(List),
  gameStarted: PropTypes.bool
}

export default EntriesTable;
