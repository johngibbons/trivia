import React from 'react';
import {Link} from 'react-router';

const DropdownLink = ({
  url,
  onClick,
  className,
  children
}) => {
  return(
    <li className={className}>
      <Link to={url} onClick={onClick}>{children}</Link>
    </li>
  );
};

export default DropdownLink;
