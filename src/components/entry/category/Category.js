import React, { PropTypes } from 'react'
import './Category.css'
import { Record, Seq } from 'immutable';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  currentNomineesSelector
} from '../../../selectors/nominees-selector';

import { Card, CardHeader } from 'material-ui/Card';
import NomineesGrid from './nomineesGrid/NomineesGrid';

const Category = ({
  category,
  nominees,
  selectedNomineeId
}) => {
  const incorrect = category.correctAnswer &&
    category.correctAnswer !== selectedNomineeId;
  const categoryClasses = classNames(
    'Category',
    {
      'Category--selected': !!selectedNomineeId,
      'Category--correct': category.correctAnswer && !incorrect,
      'Category--incorrect': incorrect
    }
  )

  return (
    <Card
      className={categoryClasses}
    >
      <CardHeader
        title={category.name}
        subtitle={`${category.value} points`}
        titleStyle={{
          fontSize: '18px'
        }}
        subtitleStyle={{
          fontSize: '15px'
        }}
      />
      <NomineesGrid
        nominees={nominees}
        selectedNomineeId={selectedNomineeId}
        correctNomineeId={category.correctAnswer}
      />
    </Card>
  )
}

Category.propTypes = {
  entry: PropTypes.instanceOf(Record),
  category: PropTypes.instanceOf(Record).isRequired,
  nominees: PropTypes.instanceOf(Seq).isRequired,
  selectedNomineeId: PropTypes.string
}

const mapStateToProps = (state, props) => {
  return {
    nominees: currentNomineesSelector(state, props),
    selectedNomineeId: props.entry ?
      props.entry.getIn(['selections', props.category.id]) :
      props.category.correctAnswer
  }

}
export default connect(mapStateToProps)(Category)
