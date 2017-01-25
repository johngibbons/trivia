import React, { PropTypes } from 'react'
import './EditQuestionsList.css'

import { List } from 'immutable'

import EditQuestion from './editQuestion/EditQuestion';

const EditQuestionsList = ({
  questions
}) => {
  return (
    <div className='EditQuestionsList' >
      {questions.map((question, i) =>
        <EditQuestion
          key={i}
          question={question}
          index={i}
        />)}
    </div>
  )
}

EditQuestionsList.propTypes = {
  questions: PropTypes.instanceOf(List)
}

export default EditQuestionsList
