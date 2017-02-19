import React, { PropTypes } from 'react'
import './AccountDropdown.css'
import { connect } from 'react-redux'
import { Record } from 'immutable'
import { signOut } from '../../../actions/user-actions';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

const AccountDropdown = ({
  currentUser,
  onClickSignOut
}) => {
  return (
    <IconMenu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      targetOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      iconButtonElement={(
        <IconButton
          className='AccountDropdown-icon'
        >
          <Avatar src={currentUser.photoURL} />
        </IconButton>
      )}
    >
      <MenuItem primaryText="My Groups" />
      <MenuItem primaryText="Account" />
      <MenuItem
        primaryText="Sign out"
        onClick={onClickSignOut}
      />
    </IconMenu>
  )
}

AccountDropdown.propTypes = {
  currentUser: PropTypes.instanceOf(Record),
  onClickSignOut: PropTypes.func.isRequired
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
}

export default connect(mapStateToProps, {
  onClickSignOut: signOut
})(AccountDropdown)
