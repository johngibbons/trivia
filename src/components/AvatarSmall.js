import React from 'react';

const AvatarSmall = ({url, style}) => {
  return (
    <img
      src={url}
      className='avatar-small'
    />
  );
};

export default AvatarSmall;
