import React from 'react';
import {connect} from 'react-redux';

const App = React.createClass({
  componentDidMount(){
    console.log(this.props.children);
  },
  render(){
    return this.props.children;
  }
});

export default connect()(App);
