import React from 'react';
import classNames from 'classnames';

const InputValidated = ({
  id,
  type,
  label,
  value,
  placeholder,
  validation,
  errorMessage,
  onChange,
  onBlur
}) => {

  const formClasses = classNames({
    'form-group': true,
    'has-feedback': true,
    'has-success': validation === 'success',
    'has-error': validation === 'error'
  });

  return (
    <div className={formClasses}>
      <label
        className='control-label'
        htmlFor={id}
      >{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {validation === 'success' &&
        <span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
      }
      {validation === 'success' &&
        <span id="emailInputSuccess" className="sr-only">(success)</span>
      }
      {validation === 'error' &&
        <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
      }
      {validation === 'error' &&
        <span id="emailInputError" className="sr-only">(error)</span>
      }
      {validation === 'error' &&
        <p
          className="help-block"
          style={{fontSize: '12px'}}
        >{errorMessage}</p>
      }
    </div>
  );
};

export default InputValidated;
