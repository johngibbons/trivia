import React, { PropTypes } from 'react'
import './LoginButton.css'
import { connect } from 'react-redux';
import { openModal } from '../../../actions/ui-actions';

import FlatButton from 'material-ui/FlatButton'

const LoginButton = ({
  onClick
}) => {
  return (
    <FlatButton
      label='login'
      className='LoginButton'
      onClick={() => onClick('AUTH')}
    />
  )
}

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default connect(undefined, {
  onClick: openModal
})(LoginButton)
