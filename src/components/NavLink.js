import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

const NavLink = ({
  url,
  active,
  onClick,
  children
}) => {

  const className = classNames({
    'nav-item': true,
    'nav-link': true,
    active: active
  });

  if (url) {
    return (
      <Link
        to={url}
        className={className}
      >{children}</Link>
    );
  } else {
    return (
      <a
        href='#'
        className={className}
        onClick={onClick}
      >{children}</a>
    );
  }
};

export default NavLink;
