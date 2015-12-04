import React from 'react';
import AddForm from './AddForm';
import {connect} from 'react-redux';
import {addGame} from '../actions/index';
import {Link} from 'react-router';

let nextGameId = 0;
const Dashboard = React.createClass({
  render(){
    return(
      <div>
        <div className="jumbotron text-center">
          <div className="page-header">
            <h1>Welcome to Trvia</h1>
            <p className="lead">click below to get started</p>
          </div>
          <div className="container">
            <div className="col-md-6 col-md-offset-3">
              <Link to="/games/new">
                <button className="btn btn-primary btn-lg">Create A Game</button>
              </Link>
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
});

function mapStateToProps(state){
  console.log('state', state);
  return {
    gamesById: state.gamesById
  };
}

export default connect(mapStateToProps)(Dashboard);
