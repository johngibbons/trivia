import React from 'react';

const Icon = ({
  type,
  style,
  className,
  onMouseDown,
  onClick
}) => {
  let path;
  switch (type) {
  case 'close':
    path = 'M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z';
    break;
  case 'correct':
    path = 'M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z';
    break;
  case 'incorrect':
    path = 'M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z';
    break;
  case 'selected':
    path = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z';
    break;
  case 'delete':
    path = 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12h-12v12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z';
    break;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={'icon ' + className}
      preserveAspectRatio="xMidYMid meet"
      fit
      style={{
        height: '24px',
        width: '24px',
        ...style
      }}
      onMouseDown={onMouseDown}
      onClick={onClick}
    >
      <g><path d={path}></path></g>
    </svg>
  );
};

export default Icon;
