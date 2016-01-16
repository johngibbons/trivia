import React from 'react';
import {ROOT_REF} from '../constants';
import {connect} from 'react-redux';
import {combineStates, clearFlash} from '../actions/index';

import TopNav from '../components/TopNav';
import Alert from '../components/Alert';

class App extends React.Component{

  clearFlash() {
    this.props.dispatch(clearFlash());
  }

  render() {
    return (
      <div>
        <TopNav />
        {this.props.message &&
          <Alert type={this.props.type} onClear={this.clearFlash.bind(this)}>{this.props.message}</Alert>
        }
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const clientState = state.client || {};
  const flash = clientState.flash || {};
  return {
    type: flash.type,
    message: flash.message
  };
}

export default connect(mapStateToProps)(App);
