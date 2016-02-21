import React from 'react';
import {Link} from 'react-router';

const DropdownLink = ({
  url,
  children
}) => {
  return(
    <Link
      className='dropdown-item'
      to={url}
    >{children}</Link>
  );
};

export default DropdownLink;
