import React, { PropTypes } from 'react'
import './NomineesList.css'

import { List } from 'immutable'

import MuiList from 'material-ui/List';
import Nominee from './nominee/Nominee';

const NomineesList = ({
  nominees,
  answerable
}) => {
  return (
    <MuiList>
    {nominees.map((nominee, i) =>
      <Nominee
        key={i}
        nominee={nominee}
        disabled={!answerable}
      />)}
    </MuiList>
  )
}

NomineesList.propTypes = {
  nominees: PropTypes.instanceOf(List),
  answerable: PropTypes.bool
}

export default NomineesList
