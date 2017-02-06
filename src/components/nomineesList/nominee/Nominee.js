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
      secondaryText={nominee.secondary_text}
    />
  )
}

Nominee.propTypes = {
  nominee: PropTypes.instanceOf(Record)
}

export default Nominee
