import React, { PropTypes } from 'react';
import './Home.css';
import { connect } from 'react-redux';

import { openModal } from '../../actions/ui-actions';

import RaisedButton from 'material-ui/RaisedButton';

const Home = ({
  onClickNewGroup
}) => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Welcome to Awards Season</h2>
        <RaisedButton
          primary
          label='Create a group'
          labelStyle={{
            color: '#212121'
          }}
          onClick={() => onClickNewGroup('NEW_GROUP')}
        />
      </div>
    </div>
  )
}

Home.propTypes = {
  onClickNewGroup: PropTypes.func.isRequired
}

export default connect(null, {
  onClickNewGroup: openModal
})(Home);
