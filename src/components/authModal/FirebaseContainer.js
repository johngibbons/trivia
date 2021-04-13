import React, { Component } from "react";
import { startFirebaseUI, stopFirebaseUI } from "../../firebaseSetup";

class FirebaseContainer extends Component {
  constructor() {
    super();
    this.state = { ui: undefined };
  }

  componentWillMount() {
    this.setState({ ui: startFirebaseUI() });
  }

  componentWillUnmount() {
    stopFirebaseUI(this.state.ui);
  }

  render() {
    return <div id="firebase-auth-container" />;
  }
}

export default FirebaseContainer;
