import React from 'react';
import {Link} from 'react-router';

const DropdownLink = ({
  url,
  onClick,
  children
}) => {
  return(
    <Link className='dropdown-item' to={url} onClick={onClick}>{children}</Link>
  );
};

export default DropdownLink;
