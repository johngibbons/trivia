import React, { PropTypes } from 'react'
import './NomineesGrid.css'

import { Seq } from 'immutable'

import Nominee from './nominee/Nominee';

const NomineesGrid = ({
  nominees,
  selectedNomineeId
}) => {
  console.log(selectedNomineeId)
  return (
    <div className='NomineesGrid'>
      <div
        className='NomineesGrid--list'
      >
      {nominees.map(nominee => {
        return (
          <Nominee
            key={nominee.id}
            nominee={nominee}
            selected={selectedNomineeId === nominee.id}
          />
        )
      })}
      </div>
    </div>
  )
}

NomineesGrid.propTypes = {
  nominees: PropTypes.instanceOf(Seq),
  selectedNomineeId: PropTypes.string
}

export default NomineesGrid;
