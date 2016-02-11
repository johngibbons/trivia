import React from 'react';
import {Link} from 'react-router';

const DropdownLink = ({
  url,
  onClick,
  onClickToggle,
  children
}) => {
  return(
    <Link
      className='dropdown-item'
      to={url}
      onClick={(e) => {
        onClick(e);
      }}
    >{children}</Link>
  );
};

export default DropdownLink;
