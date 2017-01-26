import React, { PropTypes } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { createNewGame } from '../../actions/pending-game-actions';

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const Home = ({
  onClickNewGame
}) => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Welcome to Trvia</h2>
        <RaisedButton
          primary
          label='Create a game'
          labelStyle={{
            color: '#212121'
          }}
          onClick={() => onClickNewGame(shortid.generate())}
        />
        <Link to='/admin'>Admin</Link>
      </div>
    </div>
  )
}

Home.propTypes = {
  onClickNewGame: PropTypes.func.isRequired
}

export default connect(null, {
  onClickNewGame: createNewGame
})(Home);
