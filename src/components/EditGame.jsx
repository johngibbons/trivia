import React from 'react';
import EditableText from './EditableText';
import NewQuestionBtn from './NewQuestionBtn';
import QuestionList from './QuestionList';
import {connect} from 'react-redux';
import {updateAttr} from '../actions/index';

const EditGame = React.createClass({

  saveTitle(text){
    this.props.dispatch(
      updateAttr(
        {id: this.props.params.id, title: text}
      )
    );
  },

  toggleTitleForm(){
    this.props.dispatch(
      updateAttr(
        {
          id: this.props.params.id,
          titleFormVisible: !this.titleFormVisible
        }
      )
    );
  },

  toggleQuestionForm(){
    this.props.dispatch(
      updateAttr(
        {
          id: this.props.params.id,
          questionFormVisible: !this.questionFormVisible
        }
      )
    );
  },

  render(){

    this.game = this.props.gamesById[this.props.params.id] || {};
    this.questions = this.game.questions || [];
    this.titleFormVisible = this.game.titleFormVisible;
    this.questionFormVisible = this.game.questionFormVisible;

    return(
      <div className="container">
        <div className="page-header">
          <h1>
            <EditableText
              placeholder="Enter a name for your game..."
              titleFormVisible={this.titleFormVisible}
              toggleTitleForm={this.toggleTitleForm}
              saveInput={this.saveTitle}
            />
          </h1>
        </div>
        <div className="row">
          <QuestionList
            questions={this.questions}
          />
          <NewQuestionBtn
            toggleQuestionForm={this.toggleQuestionForm}
            questionFormVisible={this.questionFormVisible}
          />
        </div>
      </div>
    );

  }
});

function mapStateToProps(state) {
  return {
    gamesById: state.gamesById
  }
}

export default connect(mapStateToProps)(EditGame);
