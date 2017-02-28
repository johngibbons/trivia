import React, { Component } from 'react'
import { startFirebaseUI } from '../../firebase';

class FirebaseContainer extends Component {
  constructor() {
    super();
    this.state = { ui: undefined };
  }

  componentDidMount(){
    this.setState({ ui: startFirebaseUI() });
  }

  render() {
    return (
      <div id='firebase-auth-container' />
    )
  }
}

export default FirebaseContainer
