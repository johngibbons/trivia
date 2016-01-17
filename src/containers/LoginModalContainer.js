import React from 'react';
import {connect} from 'react-redux';
import {
  setFlash,
  logInUser
} from '../actions/index';
import {ROOT_REF} from '../constants';

import LoginModal from '../components/LoginModal';

class LoginModalContainer extends React.Component {

  handleOAuthLogin(provider, e) {
    e.preventDefault();
    ROOT_REF.authWithOAuthPopup(provider, (error, authData) => {
      if (error) {
        if (error.code === 'TRANSPORT_UNAVAILABLE') {
          ROOT_REF.authWithOAuthRedirect(provider, (error) => {
            this.props.dispatch(setFlash('danger', error.message));
          });
        }
      } else if (authData) {
        const name = authData[provider].displayName;
        const id = authData.uid;
        const token = authData.token;
        const avatarURL = authData[provider].profileImageURL;
        const username = authData[provider].displayName.toLowerCase().replace(/\s/, '');
        this.props.dispatch(logInUser({name,id,token,avatarURL,username}));
        this.props.dispatch(setFlash('success', `${username}, you have been successfully logged in`));
      }
    });
    this.props.toggleModal();
  }

  render() {
    return (
      <LoginModal
        isShowing={this.props.isModalShowing}
        onClickClose={this.props.onClickClose}
        onClickFacebook={this.handleOAuthLogin.bind(this, 'facebook')}
        onClickGoogle={this.handleOAuthLogin.bind(this, 'google')}
      />
    );
  }

}

export default connect()(LoginModalContainer);
