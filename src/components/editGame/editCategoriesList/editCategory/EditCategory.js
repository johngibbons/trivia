import React, { PropTypes } from 'react'
import './EditCategory.css'
import { Record, List } from 'immutable';
import { connect } from 'react-redux';
import { currentNomineesSelector } from '../../../../selectors/nominees-selector';

import { Card, CardHeader } from 'material-ui/Card';
import NomineesList from '../../../nomineesList/NomineesList';

const EditCategory = ({
  category,
  nominees,
  index
}) => {
  return (
    <Card className='EditCategory' >
      <CardHeader
        title={category.text}
        subtitle={`${category.point_value} points`}
      />
      <NomineesList nominees={nominees} />
    </Card>
  )
}

EditCategory.propTypes = {
  category: PropTypes.instanceOf(Record).isRequired,
  nominees: PropTypes.instanceOf(List).isRequired,
  index: PropTypes.number.isRequired
}

const mapStateToProps = (state, props) => {
  console.log('state', state)
  return {
    nominees: currentNomineesSelector(state, props)
  }

}
export default connect(mapStateToProps)(EditCategory)
