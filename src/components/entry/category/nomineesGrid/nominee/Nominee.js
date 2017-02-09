import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import './Nominee.css';
import { Record } from 'immutable';
import { selectNominee } from '../../../../../actions/entry-actions';

const Nominee = ({
  router,
  nominee,
  notSelected,
  onClickNominee
}) => {

  const nomineeClasses = classNames(
    'Nominee',
    { 'Nominee--not-selected': notSelected }
  );

  return (
    <div
      className={nomineeClasses}
      style={{
        backgroundImage: `url(${nominee.imageUrl})`
      }}
      onClick={() => onClickNominee(router.params.id, nominee)}
    >
      <div className='Nominee--text-container'>
        <div>
          <div className='Nominee--text'>{nominee.text}</div>
          {nominee.secondaryText &&
          <div className='Nominee--secondary-text'>{nominee.secondaryText}</div>}
        </div>
      </div>
    </div>
  )
};

Nominee.propTypes = {
  router: PropTypes.object,
  nominee: PropTypes.instanceOf(Record),
  notSelected: PropTypes.bool.isRequired,
  onClickNominee: PropTypes.func.isRequired
};

export default withRouter(connect(null, {
  onClickNominee: selectNominee
})(Nominee));
