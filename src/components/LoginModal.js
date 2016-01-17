import React from 'react';

import Button from './Button';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

const LoginModal = ({
  isShowing,
  onClickClose,
  onClickFacebook
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
              style={{width: '100%'}}
            >
              Log In With Google
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
