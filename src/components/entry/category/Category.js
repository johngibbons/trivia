import React, { PropTypes } from 'react'
import './Category.css'
import { Record, Seq } from 'immutable'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { currentNomineesSelector } from '../../../selectors/nominees-selector'

import { Card, CardHeader } from 'material-ui/Card'
import NomineesGrid from './nomineesGrid/NomineesGrid'
import IncorrectIcon from 'material-ui/svg-icons/navigation/cancel'
import CorrectIcon from 'material-ui/svg-icons/action/check-circle'

const Category = ({ category, value, nominees, selectedNomineeId }) => {
  const incorrect =
    category.correctAnswer && category.correctAnswer !== selectedNomineeId
  const correct = category.correctAnswer && !incorrect
  const categoryClasses = classNames('Category', {
    'Category--selected': !!selectedNomineeId,
    'Category--correct': correct,
    'Category--incorrect': incorrect
  })

  return (
    <Card className={categoryClasses}>
      <CardHeader
        avatar={
          category.correctAnswer &&
            (incorrect
              ? <IncorrectIcon
                className='Category__status-icon Category__status-icon--incorrect'
                color='rgb(255, 0, 0)'
                />
              : <CorrectIcon
                className='Category__status-icon Category__status-icon--correct'
                color='#b7a261'
                />)
        }
        title={category.name}
        subtitle={`${value} points`}
        titleStyle={{
          fontSize: '18px'
        }}
        titleColor={
          category.correctAnswer
            ? correct ? '#b7a261' : 'rgb(255, 0, 0)'
            : 'rgba(66, 66, 66, 0.87)'
        }
        subtitleStyle={{
          fontSize: '15px'
        }}
        subtitleColor={
          category.correctAnswer
            ? correct ? '#b7a261' : 'rgb(255, 0, 0)'
            : 'rgba(66, 66, 66, 0.54)'
        }
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      />
      <NomineesGrid
        categoryId={category.id}
        nominees={nominees}
        selectedNomineeId={selectedNomineeId}
        correctNomineeId={category.correctAnswer}
        isIncorrect={incorrect}
      />
    </Card>
  )
}

Category.propTypes = {
  entry: PropTypes.instanceOf(Record),
  category: PropTypes.instanceOf(Record).isRequired,
  value: PropTypes.number,
  nominees: PropTypes.instanceOf(Seq).isRequired,
  selectedNomineeId: PropTypes.string
}

const mapStateToProps = (state, props) => {
  return {
    nominees: currentNomineesSelector(state, props),
    selectedNomineeId: props.entry
      ? props.entry.getIn(['selections', props.category.id])
      : props.category.correctAnswer
  }
}
export default connect(mapStateToProps)(Category)
