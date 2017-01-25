import React, { PropTypes } from 'react'
import './EditQuestion.css'
import { Record, List } from 'immutable';
import { connect } from 'react-redux';
import { currentPossibleAnswersSelector } from '../../../../selectors/possible-answers-selector';

import { Card, CardHeader } from 'material-ui/Card';
import PossibleAnswersList from '../../../possibleAnswersList/PossibleAnswersList';

const EditQuestion = ({
  question,
  possibleAnswers,
  index
}) => {
  return (
    <Card className='EditQuestion' >
      <CardHeader
        title={question.text}
        subtitle={`${question.point_value} points`}
      />
      <PossibleAnswersList possibleAnswers={possibleAnswers} />
    </Card>
  )
}

EditQuestion.propTypes = {
  question: PropTypes.instanceOf(Record).isRequired,
  possibleAnswers: PropTypes.instanceOf(List).isRequired,
  index: PropTypes.number.isRequired
}

const mapStateToProps = (state, props) => {
  console.log('state', state)
  return {
    possibleAnswers: currentPossibleAnswersSelector(state, props)
  }

}
export default connect(mapStateToProps)(EditQuestion)
