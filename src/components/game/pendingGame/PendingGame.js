import React, { PropTypes } from 'react'
import './PendingGame.css'

import { connect } from 'react-redux';
import { updatePendingGame } from '../../../actions/pending-game-actions';
import PageHeading from '../../pageHeading/PageHeading';

const PendingGame = ({
  name,
  onChange
}) => {
  return (
    <div className='PendingGame'>
      <PageHeading
        text={name}
      />
    </div>
  )
}

PendingGame.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = ({
  pendingGame
}) => {
  return {
    name: pendingGame.name
  }
}

export default connect(mapStateToProps, {
  onChange: updatePendingGame
})(PendingGame)
