import React from 'react';

import EditableTextContainer from '../containers/EditableTextContainer';

const User = ({
  user,
  currentUser,
  onClickEdit,
  onUpdate
}) => {
  const isCurrentUser = user.id === currentUser.id;
  let borderStyle;

  if (isCurrentUser && user.provider === 'facebook') {
    borderStyle = '1px solid #3b5999';
  } else if (isCurrentUser && user.provider === 'google') {
    borderStyle = '1px solid #d32f2f';
  }

  return (
    <div className='container'>
      <div className='col-md-4 col-md-offset-4'>
        <div style={{
          display: 'inline-block',
          marginBottom: '10px',
          width: '60px',
          height: '60px'
        }}>
          <img src={user.avatarURL} className='img-responsive img-rounded' />
        </div>
          {isCurrentUser &&
            <div className='form-group'>
              <label>Avatar Image URL</label>
              <EditableTextContainer
                id='avatarURL'
                attr='avatarURL'
                value={user.avatarURL}
                placeholder='Enter image url'
                save={onUpdate}
              />
            </div>
          }
        <div className='form-group'>
          <label>Username</label>
          {isCurrentUser ?
            <EditableTextContainer
              id='username'
              attr='username'
              value={user.username}
              placeholder='Username'
              save={onUpdate}
            />
            :
            <p className='help-block'>
              {user.username}
            </p>
          }
        </div>
        <div style={{
          border: borderStyle,
          borderRadius: '6px',
          padding: isCurrentUser && user.provider !== 'password' && '15px'
        }}>

          {isCurrentUser && user.provider === 'facebook' &&
            <p
              style={{
                color: '#3b5999',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}
            >connected through facebook account</p>
          }

          {isCurrentUser && user.provider === 'google' &&
            <p
              style={{
                color: '#d32f2f',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}
            >connected through google account</p>
          }

          <div className='form-group'>
            <label>Name</label>
            {isCurrentUser && user.provider === 'password' ?
              <EditableTextContainer
                id='name'
                attr='name'
                value={user.name}
                placeholder='Name'
                save={onUpdate}
              />
              :
              <p className='help-block'>
                {user.name}
              </p>
            }
          </div>
        {isCurrentUser &&
          <div className='form-group'>
            <label>Email</label>
            {isCurrentUser && user.provider === 'password' ?
              <EditableTextContainer
                id='email'
                attr='email'
                type='email'
                value={user.email}
                placeholder='Email'
                save={onUpdate}
              />
              :
              <p className='help-block'>
                {user.email}
              </p>
            }
          </div>
        }
        {isCurrentUser && user.provider === 'password' &&
          <div className='form-group'>
            <label>Password</label>
            {isCurrentUser ?
              <EditableTextContainer
                id='password'
                attr='password'
                type='password'
                value='********'
                placeholder='Password'
                save={onUpdate}
              />
              :
              <p className='help-block'>
                ********
              </p>
            }
          </div>
        }
        </div>
      </div>
    </div>
  );
};

export default User;
