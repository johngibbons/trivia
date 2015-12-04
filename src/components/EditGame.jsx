import React from 'react';
import EditableText from './EditableText';
import NewQuestionBtn from './NewQuestionBtn';
import QuestionList from './QuestionList';
import {connect} from 'react-redux';
import {toggleGameEditing} from '../actions/index';

const EditGame = React.createClass({
  saveTitle(){
    console.log("Title saved!");
  },
  getCurrentGame(){
    return this.props.gamesById[this.props.params.id] || {};
  },
  getGameQuestions(){
    return this.getCurrentGame().questions || [];
  },
  getEditing(){
    return this.getCurrentGame().editing || false;
  },
  toggleEditing(){
    this.props.dispatch(toggleGameEditing(this.props.params.id));
  },
  render(){
    return(
      <div className="container">
        <div className="page-header">
          <h1>
            <EditableText
              placeholder="Enter a name for your game..."
              editing={this.getEditing()}
              toggleEditing={this.toggleEditing}
              saveInput={this.saveTitle}
            />
          </h1>
        </div>
        <div className="row">
          <QuestionList
            questions={this.getGameQuestions()}
          />
          <NewQuestionBtn
          />
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  console.log("state:", state);
  return {
    gamesById: state.gamesById
  }
}

export default connect(mapStateToProps)(EditGame);
