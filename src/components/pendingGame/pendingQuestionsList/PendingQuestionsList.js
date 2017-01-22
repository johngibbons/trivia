import React, { PropTypes } from 'react'
import './PendingQuestionsList.css'

import { List } from 'immutable'

import PendingQuestion from './pendingQuestion/PendingQuestion';

const PendingQuestionsList = ({
  pendingQuestions
}) => {
  return (
    <div className='PendingQuestionsList' >
      {pendingQuestions.map((pendingQuestion, i) =>
        <PendingQuestion
          key={i}
          pendingQuestion={pendingQuestion}
          index={i}
        />)}
    </div>
  )
}

PendingQuestionsList.propTypes = {
  pendingQuestions: PropTypes.instanceOf(List)
}

export default PendingQuestionsList
