import React from 'react';
import EditableText from './EditableText';
import NewQuestionBtn from './NewQuestionBtn';
import QuestionList from './QuestionList';
import {connect} from 'react-redux';
import {updateAttr, addQuestion, removeQuestion, addAnswer} from '../actions/index';

const EditGame = React.createClass({

  saveTitle(text) {
    this.props.dispatch(
      updateAttr(
        {id: this.props.params.id, title: text}
      )
    );
  },

  saveQuestion(input) {
    this.props.dispatch(
      addQuestion(input, this.props.params.id)
    );
  },

  removeQuestion(props) {
    this.props.dispatch(removeQuestion(props));
  },

  addAnswer(input, props) {
    this.props.dispatch(addAnswer(input, props));
  },

  toggleTitleForm() {
    this.props.dispatch(
      updateAttr(
        {
          id: this.props.params.id,
          titleFormVisible: !this.titleFormVisible
        }
      )
    );
  },

  toggleQuestionForm() {
    this.props.dispatch(
      updateAttr(
        {
          id: this.props.params.id,
          questionFormVisible: !this.questionFormVisible
        }
      )
    );
  },

  render() {

    this.game = this.props.gamesById[this.props.params.id] || {};
    this.questions = this.game.questions || [];
    this.titleFormVisible = this.game.titleFormVisible;
    this.questionFormVisible = this.game.questionFormVisible;

    return(
      <div className="container">
        <div className="page-header">
          <h1>
            <EditableText
              className='editable-title'
              placeholder="Enter a name for your game..."
              titleFormVisible={this.titleFormVisible}
              toggleTitleForm={this.toggleTitleForm}
              saveInput={this.saveTitle}
            />
          </h1>
        </div>
        <div className="row">
          <QuestionList
            questionsById={this.props.questionsById}
            questions={this.questions}
            answersById={this.props.answersById}
            game={this.props.params.id}
            addAnswer={this.addAnswer}
            removeQuestion={this.removeQuestion}
            toggleQuestionForm={this.toggleQuestionForm}
          />
          <NewQuestionBtn
            toggleQuestionForm={this.toggleQuestionForm}
            questionFormVisible={this.questionFormVisible}
            save={this.saveQuestion}
          />
        </div>
      </div>
    );

  }
});

function mapStateToProps(state) {
  console.log('state is:', state);
  return {
    gamesById: state.gamesById,
    questionsById: state.questionsById,
    answersById: state.answersById
  }
}

export default connect(mapStateToProps)(EditGame);
