import React, { PropTypes } from 'react'
import './PossibleAnswer.css'

import { Record } from 'immutable'

import {List, ListItem} from 'material-ui/List';

const PossibleAnswer = ({
  possibleAnswer
}) => {
  return (
    <ListItem className='PossibleAnswer'>
      {possibleAnswer.text}
    </ListItem>
  )
}

PossibleAnswer.propTypes = {
  possibleAnswer: PropTypes.instanceOf(Record)
}

export default PossibleAnswer
