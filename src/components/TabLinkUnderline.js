import React from 'react';
import {colors} from '../constants';
import classNames from 'classnames';

const TabLinkUnderline = ({isSelected, onClick, style, children}) => {

  const tabLinkClasses = classNames({
    'tab-link': true,
    'isSelected': isSelected
  });

  return (
    <a
      href='#'
      style={style}
      className={tabLinkClasses}
      onClick={onClick}
    >{children}</a>
  );
};

export default TabLinkUnderline;
