import React from 'react';

const AvatarSmall = ({url, style}) => {
  return (
    <img
      src={url}
      style={{
        width: '35px',
        height: '35px',
        borderRadius: '100%',
        ...style
      }}
    />
  );
};

export default AvatarSmall;
