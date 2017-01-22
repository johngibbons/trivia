import React, { PropTypes } from 'react'
import './PossibleAnswer.css'
import { Record } from 'immutable'

import { ListItem } from 'material-ui/List'

const PossibleAnswer = ({
  possibleAnswer,
  disabled
}) => {
  return (
    <ListItem
      disabled={disabled}
      primaryText={possibleAnswer.text}
      secondaryText={possibleAnswer.secondary_text}
    />
  )
}

PossibleAnswer.propTypes = {
  possibleAnswer: PropTypes.instanceOf(Record)
}

export default PossibleAnswer
