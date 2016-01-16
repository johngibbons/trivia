import React from 'react';
import {ROOT_REF} from '../constants';
import {connect} from 'react-redux';
import {logInUser, setFlash} from '../actions/index';

import LoginModal from '../components/LoginModal';
import Alert from '../components/Alert';

class LoginContainer extends React.Component {

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

  render() {
    return (
      <div
        className='pull-right'
        style={{
          height: '50px',
          lineHeight: '20px',
          padding: '15px'
        }}
      >
        <a
          href='#'
          onClick={this.showModal.bind(this)}
        >Login</a>
        <LoginModal
          modalShowing={this.state.modalShowing}
          onClickClose={this.hideModal.bind(this)}
          onClickFacebook={this.handleFacebookLogin.bind(this)}
        />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(LoginContainer);
