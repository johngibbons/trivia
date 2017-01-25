import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router';
import './Navbar.css'
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import LoginButton from './loginButton/LoginButton';
import AccountDropdown from './accountDropdown/AccountDropdown';

const Navbar = ({
  loggedIn
}) => {
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
      iconElementRight={loggedIn ? <AccountDropdown /> : <LoginButton />}
      showMenuIconButton={false}
      onTitleTouchTap={() => browserHistory.push('/')}
      iconStyleRight={{
        marginTop: 0
      }}
    />
  )
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool
}

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: !!currentUser.email
  }
}

export default connect(mapStateToProps)(Navbar)
