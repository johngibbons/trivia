import React, { PropTypes } from 'react'
import './PossibleAnswersList.css'

import { List } from 'immutable'

import MuiList from 'material-ui/List';
import PossibleAnswer from './possibleAnswer/PossibleAnswer';

const PossibleAnswersList = ({
  possibleAnswers,
  answerable
}) => {
  return (
    <MuiList>
    {possibleAnswers.map((possibleAnswer, i) =>
      <PossibleAnswer
        key={i}
        possibleAnswer={possibleAnswer}
        disabled={!answerable}
      />)}
    </MuiList>
  )
}

PossibleAnswersList.propTypes = {
  possibleAnswers: PropTypes.instanceOf(List),
  answerable: PropTypes.bool
}

export default PossibleAnswersList
