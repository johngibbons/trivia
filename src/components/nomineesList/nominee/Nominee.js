import React, { PropTypes } from 'react'
import './Nominee.css'
import { Record } from 'immutable'

import { ListItem } from 'material-ui/List'

const Nominee = ({
  nominee,
  disabled
}) => {
  return (
    <ListItem
      disabled={disabled}
      primaryText={nominee.text}
      secondaryText={nominee.secondaryText}
    />
  )
}

Nominee.propTypes = {
  nominee: PropTypes.instanceOf(Record)
}

export default Nominee
