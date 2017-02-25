import React, { PropTypes } from 'react'
import './Auth.css'
import FirebaseContainer from '../authModal/FirebaseContainer';
import PageHeading from '../pageHeading/PageHeading';

const Auth = () => {
  return (
    <div>
      <PageHeading
        text='Log In'
      />
      <FirebaseContainer />
    </div>
  )
}

Auth.propTypes = {

}

export default Auth
