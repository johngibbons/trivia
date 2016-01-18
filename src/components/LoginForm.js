import React from 'react';

import InputValidated from './InputValidated';

const LoginForm = ({
  isSignup,
  onChange,
  onBlur,
  onSubmit,
  usernameValue,
  usernameValidation,
  emailValue,
  emailValidation,
  passwordValue,
  passwordValidation
}) => {

  return (
    <form>
      {isSignup &&
        <InputValidated
          id='signupUsername'
          type='text'
          label='Username'
          value={usernameValue}
          placeholder='Username'
          validation={usernameValidation}
          errorMessage='Username is taken'
          onChange={onChange}
          onBlur={onBlur}
        />
      }
      <InputValidated
        id='loginEmail'
        type='email'
        label='Email Address'
        value={emailValue}
        placeholder='Email Address'
        validation={emailValidation}
        errorMessage='Please enter a valid email'
        onChange={onChange}
        onBlur={onBlur}
      />
      <InputValidated
        id='loginPassword'
        type='password'
        label='Password'
        value={passwordValue}
        placeholder='Password'
        validation={passwordValidation}
        errorMessage='Password must be at least 8 characters'
        onChange={onChange}
        onBlur={onBlur}
      />
      <button
        type='submit'
        className='btn btn-primary'
        style={{width: '100%'}}
        onClick={onSubmit}
      >Submit</button>
    </form>
  );
};

export default LoginForm;
