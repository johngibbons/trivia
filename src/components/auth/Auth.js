import React from "react";
import "./Auth.css";
import FirebaseContainer from "../firebaseContainer/FirebaseContainer";
import PageHeading from "../pageHeading/PageHeading";

const Auth = () => {
  return (
    <div>
      <PageHeading text="Log In" />
      <FirebaseContainer />
    </div>
  );
};

export default Auth;
