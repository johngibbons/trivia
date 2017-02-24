import React, { PropTypes } from 'react'
import './EditValueField.css'
import { connect } from 'react-redux';
import { updateValueField } from '../../../../actions/ui-actions';

import Category from '../../../../models/Category';
import TextField from 'material-ui/TextField';

const EditValueField = ({
  value,
  category,
  onChange
}) => {
  return (
    <TextField
      id={category.id}
      type='number'
      defaultValue={category.value}
      floatingLabelText={category.name}
      className='EditValueField'
      value={value}
      onChange={(e) => onChange(category.id, parseInt(e.target.value), 10)}
    />
  )
}

EditValueField.propTypes = {
  value: PropTypes.number,
  category: PropTypes.instanceOf(Category),
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    value: state.ui.values[props.category.id]
  }
}

export default connect(mapStateToProps, {
  onChange: updateValueField
})(EditValueField)
