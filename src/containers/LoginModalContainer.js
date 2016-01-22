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
      usernameValue: '',
      usernameValidation: '',
      emailValue: '',
      emailValidation: '',
      passwordValue: '',
      passwordValidation: '',
      isLoginSelected: true,
      isSignupSelected: false
    };
  }

  handleOAuthLogin(provider, e) {
    e.preventDefault();
    ROOT_REF.authWithOAuthPopup(provider, (error, authData) => {
      if (error) {
        if (error.code === 'TRANSPORT_UNAVAILABLE') {
          ROOT_REF.authWithOAuthRedirect(provider, (error) => {
            this.props.dispatch(
              setFlash('danger', 'Login Error: ' + error.message)
            );
          });
        }
      } else if (authData) {
        const dbUser = this.props.usersById && this.props.usersById[authData.uid] || {};
        const user = {
          id: authData.uid,
          name: dbUser.name || authData[provider].displayName,
          email: authData[provider].email,
          provider: authData.provider,
          avatarURL: dbUser.avatarURL || authData[provider].profileImageURL,
          username: dbUser.username || authData[provider].email.split('@')[0].replace(/[\.\_\+]/g, '')
        };

        this.props.dispatch(logInUser(user));
        this.props.dispatch(setFlash(
          'success',
          `you have been successfully logged in as ${user.username}`
        ));

      }
    }, {scope: 'email'});
    this.props.toggleModal();
  }

  handleEmailLogin() {
    ROOT_REF.authWithPassword({
      email    : this.state.emailValue,
      password : this.state.passwordValue
    }, (error, authData) => {
      if (error) {
        this.props.dispatch(setFlash('danger', 'Login Error: ' + error.message));
      } else {
        const dbUser = this.props.usersById && this.props.usersById[authData.uid] || {};
        const user = {
          id: authData.uid,
          name: dbUser.name || '',
          email: authData.password.email,
          provider: authData.provider,
          avatarURL: dbUser.avatarURL || authData.password.profileImageURL,
          username: dbUser.username || authData.password.email.split('@')[0].replace(/[\.\_\+]/g, '')
        };
        this.props.dispatch(logInUser(user));
        if (this.state.isSignupSelected) {
          this.props.dispatch(setFlash('success', `Signup Successful.  Welcome to Trvia, ${user.username}!`));
        } else {
          this.props.dispatch(setFlash('success', `you have been successfully logged in as ${user.username}`));
        }
      }
    });
  }

  handleEmailSignup() {
    ROOT_REF.createUser({
      email    : this.state.emailValue,
      password : this.state.passwordValue
    }, (error, userData) => {
      if (error) {
        this.props.dispatch(
          setFlash('danger', 'Sign Up Error: ' + error.message)
        );
      } else {
        this.handleEmailLogin.call(this);
      }
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.isSignupSelected) {
      if (
        this.state.usernameValidation === 'success' &&
        this.state.emailValidation === 'success' &&
        this.state.passwordValidation === 'success'
      ) {
        this.handleEmailSignup.call(this);
        this.props.toggleModal();
      }
    } else if (this.state.isLoginSelected) {
      if (
        this.state.emailValidation === 'success' &&
        this.state.passwordValidation === 'success'
      ) {
        this.handleEmailLogin.call(this);
        this.props.toggleModal();
      }
    }
  }

  validateUsername(value) {
    return 'success';
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

  handleTabChange(value) {
    if (value === 'login') {
      this.setState({
        isSignupSelected: false,
        isLoginSelected: true
      });
    } else if (value === 'signup') {
      this.setState({
        isSignupSelected: true,
        isLoginSelected: false
      });
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
    } else if (e.target.type === 'text') {
      this.setState({
        usernameValue: e.target.value
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
    } else if (e.target.type === 'text') {
      this.setState({
        usernameValidation: this.validateUsername(inputText)
      });
    }
  }

  render() {
    return (
      <LoginModal
        isShowing={this.props.isModalShowing}
        isLoginSelected={this.state.isLoginSelected}
        isSignupSelected={this.state.isSignupSelected}
        usernameValue={this.state.usernameValue}
        usernameValidation={this.state.usernameValidation}
        emailValue={this.state.emailValue}
        emailValidation={this.state.emailValidation}
        passwordValue={this.state.passwordValue}
        passwordValidation={this.state.passwordValidation}
        onClickClose={this.props.onClickClose}
        onClickTab={this.handleTabChange.bind(this)}
        onClickFacebook={this.handleOAuthLogin.bind(this, 'facebook')}
        onClickGoogle={this.handleOAuthLogin.bind(this, 'google')}
        onChange={this.handleFormChange.bind(this)}
        onBlur={this.handleFormBlur.bind(this)}
        onSubmit={this.handleFormSubmit.bind(this)}
      />
    );
  }

}

function mapStateToProps(state) {
  const remoteState = state.remote || {};
  return {
    usersById: remoteState.usersById
  };
}

export default connect(mapStateToProps)(LoginModalContainer);
