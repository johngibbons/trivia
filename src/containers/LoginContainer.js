import React from 'react';
import {ROOT_REF} from '../constants';
import {connect} from 'react-redux';
import {
  logInUser,
  logOutUser,
  setFlash
} from '../actions/index';

class AccountDropdownMenuContainer extends React.Component {

  constructor() {
    super();
    this.state = {modalShowing: false};
  }

  handleFacebookLogin(e) {
    e.preventDefault();
    this.hideModal();
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

  showModal() {
    this.setState({
      modalShowing: true
    });
  }

  hideModal() {
    this.setState({
      modalShowing: false
    });
  }

  toggleDropdown() {

  }

  render() {
    return (
      <AccountDropdownMenu />
    );
  }

}

const mapStateToProps = (state) => {
  const clientState = state.client || {};
  return {
    currentUser: clientState.currentUser
  };
};

export default connect(mapStateToProps)(LoginContainer);
