import React, { PropTypes } from 'react'
import './PendingPossibleAnswersList.css'

import { List } from 'immutable';

import MuiList from 'material-ui/List';
import PendingPossibleAnswer from './pendingPossibleAnswer/PendingPossibleAnswer';

const PendingPossibleAnswersList = ({
  possibleAnswers
}) => {
  return (
    <MuiList>
    {possibleAnswers.map((possibleAnswer, i) =>
      <PendingPossibleAnswer
        key={i}
        possibleAnswer={possibleAnswer}
        index={i}
      />
    )}
    </MuiList>
  )
}

PendingPossibleAnswersList.propTypes = {
  possibleAnswers: PropTypes.instanceOf(List)
}

export default PendingPossibleAnswersList
