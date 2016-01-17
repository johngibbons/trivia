import React from 'react';
import {ROOT_REF} from '../constants';
import {connect} from 'react-redux';
import {
  logInUser,
  logOutUser,
  setFlash
} from '../actions/index';

import AccountDropdownMenu from '../components/AccountDropdownMenu';

class AccountDropdownMenuContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      isDropdownShowing: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      isDropdownShowing: false
    });
  }

  handleLogout() {
    this.props.dispatch(logOutUser());
    this.props.dispatch(setFlash('success', 'you have been logged out'));
    ROOT_REF.unauth();
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState({
      isDropdownShowing: !this.state.isDropdownShowing
    });
  }

  render() {
    return (
      <AccountDropdownMenu
        currentUser={this.props.currentUser}
        handleLogout={this.handleLogout.bind(this)}
        toggleDropdown={this.toggleDropdown.bind(this)}
        isDropdownShowing={this.state.isDropdownShowing}
        toggleModal={this.props.toggleLoginModal}
      />
    );
  }

}

const mapStateToProps = (state) => {
  const clientState = state.client || {};
  return {
    currentUser: clientState.currentUser
  };
};

export default connect(mapStateToProps)(AccountDropdownMenuContainer);
