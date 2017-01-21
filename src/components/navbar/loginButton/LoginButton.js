import React, { PropTypes } from 'react'
import './LoginButton.css'

import FlatButton from 'material-ui/FlatButton'

const LoginButton = (props) => {
  return (
    <FlatButton
      label='login'
      className='LoginButton'
    />
  )
}

LoginButton.propTypes = {

}

export default LoginButton
