import React, { PropTypes } from 'react'
import './PendingQuestion.css'
import { Record } from 'immutable';

import { Card, CardHeader } from 'material-ui/Card';
import PossibleAnswersList from '../../../possibleAnswersList/PossibleAnswersList';

const PendingQuestion = ({
  pendingQuestion,
  index
}) => {
  return (
    <Card className='PendingQuestion' >
      <CardHeader
        title={pendingQuestion.text}
        subtitle={`${pendingQuestion.point_value} points`}
      />
      <PossibleAnswersList possibleAnswers={pendingQuestion.possible_answers} />
    </Card>
  )
}

PendingQuestion.propTypes = {
  pendingQuestion: PropTypes.instanceOf(Record).isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default PendingQuestion
