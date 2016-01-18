import React from 'react';
import {connect} from 'react-redux';
import {
  setFlash,
  logInUser
} from '../actions/index';
import {ROOT_REF} from '../constants';

import LoginModal from '../components/LoginModal';

class LoginModalContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      emailValue: '',
      emailValidation: '',
      passwordValue: '',
      passwordValidation: ''
    };
  }

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

  validateEmailAddress(value) {
    const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value);

    if (validEmail) {
      return 'success';
    } else {
      return 'error';
    }
  }

  validatePassword(value) {
    if (value.length > 7) {
      return 'success';
    } else {
      return 'error';
    }
  }

  handleFormChange(e) {
    const inputText = e.target.value;
    if (e.target.type === 'email') {
      this.setState({
        emailValue: e.target.value
      });
    } else if (e.target.type === 'password') {
      this.setState({
        passwordValue: e.target.value
      });
    }
  }

  handleFormBlur(e) {
    const inputText = e.target.value;
    if (e.target.type === 'email') {
      this.setState({
        emailValidation: this.validateEmailAddress(inputText)
      });
    } else if (e.target.type === 'password') {
      this.setState({
        passwordValidation: this.validatePassword(inputText)
      });
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <LoginModal
        isShowing={this.props.isModalShowing}
        emailValue={this.state.emailValue}
        emailValidation={this.state.emailValidation}
        passwordValue={this.state.passwordValue}
        passwordValidation={this.state.passwordValidation}
        onClickClose={this.props.onClickClose}
        onClickFacebook={this.handleOAuthLogin.bind(this, 'facebook')}
        onClickGoogle={this.handleOAuthLogin.bind(this, 'google')}
        onChange={this.handleFormChange.bind(this)}
        onBlur={this.handleFormBlur.bind(this)}
        onSubmit={this.handleFormSubmit.bind(this)}
      />
    );
  }

}

export default connect()(LoginModalContainer);
