import React, { PropTypes } from 'react'
import './LoginButton.css'
import { connect } from 'react-redux';
import { openModal } from '../../../actions/ui-actions';
import { browserHistory } from 'react-router';

import FlatButton from 'material-ui/FlatButton'

const LoginButton = () => {
  return (
    <FlatButton
      label='login'
      className='LoginButton'
      onClick={() => browserHistory.push('/login')}
    />
  )
}

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default connect(undefined, {
  onClick: openModal
})(LoginButton)
