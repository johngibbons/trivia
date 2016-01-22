import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import User from '../components/user';
import {ROOT_REF} from '../constants';
import {updateUser} from '../actions/index';

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
        onUpdate={this.handleUpdate.bind(this)}
        onPasswordSubmit={this.handlePasswordRequiredUpdate.bind(this)}
        isPasswordRequired={this.state.isPasswordRequired}
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
}

function mapStateToProps(state) {
  return {
    currentUser: state.client.currentUser,
    usersById: state.remote.usersById
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
