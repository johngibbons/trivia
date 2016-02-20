import React from 'react';

import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import TabLinkUnderline from './TabLinkUnderline';
import LoginForm from './LoginForm';

const LoginModal = ({
  isShowing,
  isLoginSelected,
  isSignupSelected,
  usernameValue,
  usernameValidation,
  emailValue,
  emailValidation,
  passwordValue,
  passwordValidation,
  onClickClose,
  onClickTab,
  onClickFacebook,
  onClickGoogle,
  onChange,
  onBlur,
  onSubmit
}) => {
  return (
    <Modal
      isShowing={isShowing}
      className='login-modal'
    >
      <ModalHeader onClickClose={onClickClose}>
        <TabLinkUnderline
          style={{fontSize: '14px'}}
          isSelected={isLoginSelected}
          onClick={() => onClickTab('login')}
        >Log In</TabLinkUnderline>
        <TabLinkUnderline
          style={{fontSize: '14px'}}
          isSelected={isSignupSelected}
          onClick={() => onClickTab('signup')}
        >Sign Up</TabLinkUnderline>
      </ModalHeader>
      <ModalBody>
        <div
          className='row'
          style={{padding: '35px'}}
        >
          <div>
            <button
              className='btn btn-facebook'
              style={{
                width: '100%',
                marginBottom: '10px'
              }}
              onClick={onClickFacebook}
            >
              {isLoginSelected &&
                'Log In With Facebook'
              }
              {isSignupSelected && 
                'Sign Up With Facebook'
              }
            </button>
            <button
              className='btn btn-google'
              style={{width: '100%', marginBottom: '15px'}}
              onClick={onClickGoogle}
            >
              {isLoginSelected &&
                'Log In With Google'
              }
              {isSignupSelected && 
                'Sign Up With Google'
              }
            </button>
            <p
              className='text-muted'
              style={{textAlign: 'center'}}
            >- or -</p>
          {isLoginSelected &&
            <LoginForm
              onChange={onChange}
              onBlur={onBlur}
              onSubmit={onSubmit}
              emailValue={emailValue}
              emailValidation={emailValidation}
              passwordValue={passwordValue}
              passwordValidation={passwordValidation}
            />
          }
          {isSignupSelected &&
            <LoginForm
              isSignup={isSignupSelected}
              onChange={onChange}
              onBlur={onBlur}
              onSubmit={onSubmit}
              usernameValue={usernameValue}
              usernameValidation={usernameValidation}
              emailValue={emailValue}
              emailValidation={emailValidation}
              passwordValue={passwordValue}
              passwordValidation={passwordValidation}
            />
          }
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
