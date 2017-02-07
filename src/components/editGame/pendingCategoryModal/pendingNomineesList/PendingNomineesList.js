import React, { PropTypes } from 'react'
import './PendingNomineesList.css'

import { Seq } from 'immutable';

import MuiList from 'material-ui/List';
import PendingNominee from './pendingNominee/PendingNominee';

const PendingNomineesList = ({
  nominees
}) => {
  return (
    <MuiList>
    {nominees.map((nominee, i) =>
      <PendingNominee
        key={i}
        nominee={nominee}
        index={i}
      />
    )}
    </MuiList>
  )
}

PendingNomineesList.propTypes = {
  nominees: PropTypes.instanceOf(Seq)
}

export default PendingNomineesList
