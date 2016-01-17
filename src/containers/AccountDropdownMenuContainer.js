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
      isModalShowing: false,
      isDropdownShowing: false
    };
  }

  componentWillReceiveProps() {
    this.setState({
      isModalShowing: false,
      isDropdownShowing: false
    });
  }

  handleFacebookLogin(e) {
    e.preventDefault();
    this.toggleModal();
    ROOT_REF.authWithOAuthPopup('facebook', (error, authData) => {
      if (error) {
        if (error.code === 'TRANSPORT_UNAVAILABLE') {
          ROOT_REF.authWithOAuthRedirect('facebook', (error) => {
            this.props.dispatch(setFlash('danger', error.message));
          });
        }
      } else if (authData) {
        const name = authData.facebook.displayName;
        const id = authData.uid;
        const token = authData.token;
        const avatarURL = authData.facebook.profileImageURL;
        const username = authData.facebook.displayName.toLowerCase().replace(/\s/, '');
        this.props.dispatch(logInUser({name,id,token,avatarURL,username}));
        this.props.dispatch(setFlash('success', `${username}, you have been successfully logged in`));
      }
    });
  }

  handleLogout() {
    this.props.dispatch(logOutUser());
  }

  toggleModal() {
    this.setState({
      isModalShowing: !this.state.isModalShowing
    });
  }

  toggleDropdown() {
    this.setState({
      isDropdownShowing: !this.state.isDropdownShowing
    });
  }

  render() {
    return (
      <AccountDropdownMenu
        currentUser={this.props.currentUser}
        handleFacebookLogin={this.handleFacebookLogin.bind(this)}
        handleLogout={this.handleLogout.bind(this)}
        toggleDropdown={this.toggleDropdown.bind(this)}
        isDropdownShowing={this.state.isDropdownShowing}
        toggleModal={this.toggleModal.bind(this)}
        isModalShowing={this.state.isModalShowing}
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
