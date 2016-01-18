import React from 'react';

import Button from './Button';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import LoginForm from './LoginForm';

const LoginModal = ({
  isShowing,
  emailValue,
  emailValidation,
  passwordValue,
  passwordValidation,
  onClickClose,
  onClickFacebook,
  onClickGoogle,
  onChange,
  onBlur,
  onSubmit
}) => {
  return (
    <Modal isShowing={isShowing}>
      <ModalHeader onClickClose={onClickClose}>Log In</ModalHeader>
      <ModalBody>
        <div
          className='row'
          style={{padding: '35px'}}
        >
          <div
            className='col-md-6 col-md-offset-3'
          >
            <button
              className='btn btn-facebook'
              style={{
                width: '100%',
                marginBottom: '10px'
              }}
              onClick={onClickFacebook}
            >
              Log In With Facebook
            </button>
            <button
              className='btn btn-google'
              style={{width: '100%', marginBottom: '15px'}}
              onClick={onClickGoogle}
            >
              Log In With Google
            </button>
            <p
              className='text-muted'
              style={{textAlign: 'center'}}
            >- or -</p>
            <LoginForm
              onChange={onChange}
              onBlur={onBlur}
              onSubmit={onSubmit}
              emailValue={emailValue}
              emailValidation={emailValidation}
              passwordValue={passwordValue}
              passwordValidation={passwordValidation}
            />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
