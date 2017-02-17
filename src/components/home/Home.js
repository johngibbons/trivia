import React, { PropTypes } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { openModal } from '../../actions/ui-actions';

import RaisedButton from 'material-ui/RaisedButton';
import NewGroupModal from '../group/newGroupModal/NewGroupModal';
import { gameNomineesSelector } from '../../selectors/nominees-selector';

const Home = ({
  nominees,
  onClickNewGroup
}) => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h5 className='Home-awards-title'>The 2017 Academy Awards</h5>
        <h1 className='Home-main-title'>Pick the <span className='Home-gold-text'>winners</span>.  Beat your friends.</h1>
        <RaisedButton
          primary
          label='Start a group'
          labelStyle={{
            color: '#424242'
          }}
          onClick={() => onClickNewGroup('NEW_GROUP')}
        />
      </div>
      <div className='Home-movie-carousel'>
        <div className='Home-movie-images'>
        {nominees.map(image => {
          return (
            <div
              className='Home-nominee-poster'
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          )
        })}
        </div>
      </div>
      <NewGroupModal />
    </div>
  )
}

Home.propTypes = {
  nominees: PropTypes.instanceOf(Map),
  onClickNewGroup: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    nominees: gameNomineesSelector(state)
  }
}

export default connect(mapStateToProps, {
  onClickNewGroup: openModal
})(Home);
