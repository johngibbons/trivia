import React, { PropTypes } from 'react'
import './NomineesGrid.css'

import { Seq } from 'immutable'

import Nominee from './nominee/Nominee';

const NomineesGrid = ({
  nominees,
  selectedNomineeId,
  correctNomineeId
}) => {
  return (
    <div className='NomineesGrid'>
      <div
        className='NomineesGrid--list'
      >
      {nominees.map((nominee, i) => {
        return (
          <Nominee
            key={nominee.id || i}
            nominee={nominee}
            selectedNomineeId={selectedNomineeId}
            correctId={correctNomineeId}
          />
        )
      })}
      </div>
    </div>
  )
}

NomineesGrid.propTypes = {
  nominees: PropTypes.instanceOf(Seq),
  selectedNomineeId: PropTypes.string,
  correctNomineeId: PropTypes.string
}

export default NomineesGrid;
