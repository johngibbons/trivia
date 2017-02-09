import React, { PropTypes } from 'react'
import './Category.css'
import { Record, Seq } from 'immutable';
import { connect } from 'react-redux';
import {
  currentNomineesSelector
} from '../../../selectors/nominees-selector';

import { Card, CardHeader } from 'material-ui/Card';
import NomineesGrid from './nomineesGrid/NomineesGrid';

const Category = ({
  entry,
  category,
  nominees
}) => {
  return (
    <Card className='Category' >
      <CardHeader
        title={category.name}
        subtitle={`${category.value} points`}
      />
      <NomineesGrid
        nominees={nominees}
        selectedNomineeId={entry.getIn(['selections', category.id])}
      />
    </Card>
  )
}

Category.propTypes = {
  entry: PropTypes.instanceOf(Record).isRequired,
  category: PropTypes.instanceOf(Record).isRequired,
  nominees: PropTypes.instanceOf(Seq).isRequired,
  selectedNomineeId: PropTypes.string
}

const mapStateToProps = (state, props) => {
  return {
    nominees: currentNomineesSelector(state, props)
  }

}
export default connect(mapStateToProps)(Category)
