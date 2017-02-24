import React, { PropTypes } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { Set } from 'immutable';
import User from '../../models/User';

import { openModal } from '../../actions/ui-actions';

import RaisedButton from 'material-ui/RaisedButton';
import NewGroupModal from '../group/newGroupModal/NewGroupModal';
import { gameNomineesSelector } from '../../selectors/nominees-selector';

const Home = ({
  currentUser,
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
          onClick={() => {
            currentUser.id ?
              onClickNewGroup('NEW_GROUP') :
              onClickNewGroup('AUTH')
          }}
        />
      </div>
      <div className='Home-movie-carousel'>
        <div className='Home-movie-images'>
        {nominees.map(image => {
          return (
            <div
              key={image}
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
  currentUser: PropTypes.instanceOf(User),
  nominees: PropTypes.instanceOf(Set),
  onClickNewGroup: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    nominees: gameNomineesSelector(state)
  }
}

export default connect(mapStateToProps, {
  onClickNewGroup: openModal
})(Home);
