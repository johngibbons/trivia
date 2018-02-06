import React, { PropTypes } from 'react'
import './Home.css'
import { connect } from 'react-redux'
import { Set } from 'immutable'
import User from '../../models/User'

import { openModal } from '../../actions/ui-actions'

import RaisedButton from 'material-ui/RaisedButton'
import NewGroupModal from '../group/newGroupModal/NewGroupModal'
import { gameNomineesSelector } from '../../selectors/nominees-selector'
import { browserHistory } from 'react-router'

const Home = ({ currentUser, nominees, onClickNewGroup }) => {
  return (
    <div className='Home'>
      <div className='Home-header'>
        <h5 className='Home-awards-title'>The 2018 Academy Awards</h5>
        <h1 className='Home-main-title'>
          Pick the
          {' '}
          <span className='Home-gold-text'>winners</span>
          .  Beat your friends.
        </h1>
        {true
          ? <RaisedButton
            primary
            label='Start a group'
            labelStyle={{
              color: '#424242'
            }}
            onClick={() => {
              currentUser.id
                  ? onClickNewGroup('NEW_GROUP')
                  : browserHistory.push('/login')
            }}
            />
          : <div className='Home-game-complete-message'>
              Note: The 2018 Oscars are complete!  Please check back for the next event.
            </div>}
      </div>
      <div className='Home-movie-carousel'>
        <div className='Home-movie-images'>
          {nominees.map(nominee => {
            return (
              <div
                key={nominee.get('id')}
                className='Home-nominee-poster'
                style={{
                  backgroundImage: `url(${nominee.get('imageUrl')})`
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
})(Home)
