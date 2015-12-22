import React from 'react';
import classNames from 'classnames';

import EditableTextContainer from '../containers/EditableTextContainer';

const Answer = ({
  id,
  text,
  isSelected
}) => {

  const answerClasses = classNames({
    'selected': isSelected,
    'answer': true,
    'list-group-item': true
  });

  return (
    <div className={answerClasses}>{text}</div>
  );
};

Answer.defaultProps = {
  isSelected: false
};

Answer.PropTypes = {
  key: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool,
};

export default Answer
