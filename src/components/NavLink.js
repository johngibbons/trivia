import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

const NavLink = ({
  url,
  active,
  className,
  onClick,
  children
}) => {

  const defaultClasses = classNames({
    'nav-item': true,
    'nav-link': true,
    active: active
  });

  const navClasses = className ? defaultClasses.concat(` ${className}`) : defaultClasses;

  if (url) {
    return (
      <Link
        to={url}
        className={navClasses}
      >{children}</Link>
    );
  } else {
    return (
      <a
        href='#'
        className={navClasses}
        onClick={onClick}
      >{children}</a>
    );
  }
};

export default NavLink;
