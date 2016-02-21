import React from 'react';
import {ROOT_REF} from '../constants';
import {connect} from 'react-redux';
import {
  combineStates,
  clearFlash,
  toggleModal,
  setCurrentUser
} from '../actions/index';

import TopNav from '../components/TopNav';
import Alert from '../components/Alert';
import LoginModalContainer from './LoginModalContainer';

class App extends React.Component{

  constructor() {
    super();
    this.state = {currentUser: {}};
  }

  componentDidMount() {
    const authData = ROOT_REF.getAuth();
    if (authData) {
      let currentUser = {
        id: authData.uid,
        email: authData[authData.provider].email,
        provider: authData.provider,
        avatarURL: authData[authData.provider].profileImageURL,
        username: authData[authData.provider].email.split('@')[0].replace(/[\.\_\+]/g, '')
      };
      this.setState({currentUser: currentUser});
    }

    ROOT_REF.on('value', (remoteState) => {
      const newState = remoteState.val().remoteState;
      this.props.dispatch(combineStates({remote: newState}));
    });
  }

  clearFlash() {
    this.props.dispatch(clearFlash());
  }

  toggleLoginModal() {
    this.props.dispatch(toggleModal('login'));
  }

  render() {

    return (
      <div>
        <TopNav
          toggleLoginModal={this.toggleLoginModal.bind(this)}
        />
        {this.props.message &&
          <Alert
            type={this.props.type}
            onClear={this.clearFlash.bind(this)}
          >
            {this.props.message}
          </Alert>
        }
          {React.cloneElement(this.props.children, {
            toggleLoginModal: this.toggleLoginModal.bind(this),
            currentUser: this.state.currentUser
          })}
        <LoginModalContainer
          isModalShowing={this.props.modal === 'login'}
          onClickClose={this.toggleLoginModal.bind(this)}
          toggleModal={this.toggleLoginModal.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const clientState = state.client || {};
  const flash = clientState.flash || {};
  return {
    type: flash.type,
    message: flash.message,
    modal: clientState.modal
  };
}

export default connect(mapStateToProps)(App);
