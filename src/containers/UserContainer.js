import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import User from '../components/user';
import {ROOT_REF} from '../constants';
import {updateUser} from '../actions/index';
import {browserHistory} from 'react-router';

class UserContainer extends React.Component {

  constructor() {
    super();
    this.state = {isPasswordRequired: false};
  }

  render() {
    return (
      <User
        user={this.props.usersById[this.props.params.user] || {}}
        currentUser={this.props.currentUser}
        gamesPlayingOrOwned={this.props.gamesPlayingOrOwned}
        onUpdate={this.handleUpdate.bind(this)}
        onPasswordSubmit={this.handlePasswordRequiredUpdate.bind(this)}
        isPasswordRequired={this.state.isPasswordRequired}
        questionsById={this.props.questionsById}
        onClickGame={this.handleClickGame.bind(this)}
        children={this.props.children}
      />
    );
  }

  handleUpdate(_, attr, value) {
    if (attr === 'email' ||  attr === 'password') {
      this.setState({
        isPasswordRequired: true
      });
    } else {
      this.props.updateUser({id: this.props.params.user, [attr]: value});
    }
  }

  handlePasswordRequiredUpdate(type, value) {
    if (type === 'email') {
      ROOT_REF.changeEmail({
        oldEmail : this.props.currentUser.email,
        newEmail : value,
        password : "correcthorsebatterystaple"
      }, function(error) {
        if (error === null) {
          console.log("Email changed successfully");
        } else {
          console.log("Error changing email:", error);
        }
      });
    }
  }

  handleClickGame(game) {
    this.props.history.push(`/games/${game}`);
  }

}

function getGamesPlayingOrOwned(user, allGames, allEntries) {
  const gamesOwned = Object.keys(allGames).filter((id) => {
    return allGames[id].user === user.id;
  }).map((id) => {
    return allGames[id];
  });

  const gamesPlaying = Object.keys(allEntries).filter((id) => {
    return allEntries[id].user === user.id;
  }).map((id) => {
    const gameId = allEntries[id].game;
    return allGames[gameId];
  });

  return gamesOwned.reduce((ownedOrPlayed, owned) => {
    const gamesPlayingIds = gamesPlaying.map(game => game.id);
    if (gamesPlayingIds.indexOf(owned.id) === -1) {
      return [...ownedOrPlayed, owned];
    }
    return [...ownedOrPlayed];
  }, gamesPlaying);
}

function mapStateToProps(state) {
  return {
    currentUser: state.client.currentUser,
    usersById: state.remote.usersById,
    questionsById: state.remote.questionsById,
    gamesPlayingOrOwned: getGamesPlayingOrOwned(
      state.client.currentUser,
      state.remote.gamesById,
      state.remote.entriesById
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
