import React from 'react';
import {Link} from 'react-router';

const DropdownLink = ({
  url,
  onClick,
  children
}) => {
  return(
    <Link
      className='dropdown-item'
      to={url}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >{children}</Link>
  );
};

export default DropdownLink;
