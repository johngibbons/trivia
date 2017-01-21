import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router';
import './Navbar.css'

import AppBar from 'material-ui/AppBar';
import LoginButton from './loginButton/LoginButton';

const Navbar = (props) => {
  return (
    <AppBar
      title='trvia'
      titleStyle={{
        cursor: 'pointer',
        color: '#212121',
        fontSize: '14px',
        fontWeight: 500,
        textTransform: 'uppercase'
      }}
      className='Navbar'
      showMenuIconButton={false}
      onTitleTouchTap={() => browserHistory.push('/')}
      iconElementRight={<LoginButton />}
      iconStyleRight={{
        marginTop: 0
      }}
    />
  )
}

Navbar.propTypes = {

}

export default Navbar
