import React from 'react';
import {connect} from 'react-redux';
import {
  setFlash,
  logInUser
} from '../actions/index';
import {ROOT_REF} from '../constants';

import LoginModal from '../components/LoginModal';

class LoginModalContainer extends React.Component {

  handleFacebookLogin(e) {
    e.preventDefault();
    this.props.toggleModal();
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

  render() {
    return (
      <LoginModal
        isShowing={this.props.isModalShowing}
        onClickClose={this.props.onClickClose}
        onClickFacebook={this.handleFacebookLogin.bind(this)}
      />
    );
  }

}

export default connect()(LoginModalContainer);
