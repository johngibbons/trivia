import React, { Component } from 'react'
import { startFirebaseUI, stopFirebaseUI } from '../../firebase';

class FirebaseContainer extends Component {
  componentDidMount(){
    startFirebaseUI();
  }

  componentWillUnmount() {
    stopFirebaseUI();
  }

  render() {
    return (
      <div id='firebase-auth-container' />
    )
  }
}

export default FirebaseContainer
