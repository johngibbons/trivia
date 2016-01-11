import React from 'react';
import {ROOT_REF} from '../constants';
import {connect} from 'react-redux';
import {combineStates} from '../actions/index';

import TopNav from '../components/TopNav';

class App extends React.Component{
  render() {
    return (
      <div>
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
