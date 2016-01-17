import React from 'react';
import {connect} from 'react-redux';
import {addGame} from '../actions/index';
import shortid from 'shortid';

class Home extends React.Component {
  render() {
    this.newId = shortid.generate();
    return(
      <div>
        <div className="jumbotron text-center">
          <div className="page-header">
            <h1>Welcome to Trvia</h1>
            <p className="lead">click below to get started</p>
          </div>
          <div className="container">
            <div className="col-md-6 col-md-offset-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={this.props.currentUser.username ?
                  this.handleNewGame.bind(this) :
                    this.props.toggleLoginModal
                }
              >Create A Game</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-md-4">
            <img src="http://placehold.it/350x250" className="img-rounded" />
          </div>
          <div className="col-md-4">
            <img src="http://placehold.it/350x250" className="img-rounded" />
          </div>
          <div className="col-md-4">
            <img src="http://placehold.it/350x250" className="img-rounded" />
          </div>
        </div>
      </div>
    );
  }

  handleNewGame(){
    this.props.dispatch(addGame(this.newId));
    this.props.history.pushState(null, `games/${this.newId}/edit`);
  }

}

function mapStateToProps(state) {
  return {
    currentUser: state.client.currentUser
  };
}

export default connect(mapStateToProps)(Home);
