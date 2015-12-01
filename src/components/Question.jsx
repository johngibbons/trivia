import React from 'react';
import {connect} from 'react-redux';
import AnswerList from './AnswerList';
import AddForm from './AddForm';
import RemoveQuestionForm from './RemoveQuestionForm';
import classNames from 'classnames';

let nextAnswerId = 0;
const Question = React.createClass({
  handleAddAnswer(input){
    this.props.dispatch({
      type: 'ADD_ANSWER',
      id: nextAnswerId++,
      text: input.value,
      question: this.props.id
    });
    input.value = '';
  },
  render(){
    let questionClass = classNames({
      'panel': true,
      'panel-default': true,
      'question': true,
      'correct': this.props.hasResult && this.props.isCorrect,
      'incorrect': this.props.hasResult && !this.props.isCorrect
    });
    return (
      <div className="col-md-4">
        <div className={questionClass} >
          <div className="panel-heading clearfix">
            <h3 className="panel-title pull-left">{this.props.text}</h3>
            <RemoveQuestionForm
              id={this.props.id}
              entry={this.props.entry}
              game={this.props.game}
            />
          </div>
          <AnswerList
            answers={this.props.answers}
            answersById={this.props.answersById}
            question={this.props.id}
          />
          {this.props.isMaster &&
            <AddForm
              placeholder="Add answer..."
              handleSubmit={this.handleAddAnswer}
              btnText="Add Answer"
            />}
        </div>
      </div>
    );
  }
});

export default connect()(Question);
