import React from 'react';
import {connect} from 'react-redux';
import AnswerList from './AnswerList';
import AddForm from './AddForm';
import SmRemoveBtn from './SmRemoveBtn';
import classNames from 'classnames';
import {addAnswer, removeQuestion} from '../actions/index';

let nextAnswerId = 0;
const Question = React.createClass({
  handleAddAnswer(input){
    this.props.dispatch(addAnswer(input, this.props));
  },
  handleRemoveQuestion(){
    this.props.dispatch(removeQuestion(this.props));
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
            <SmRemoveBtn
              handleRemove={this.handleRemoveQuestion}
            />
          </div>
          <AnswerList
            answers={this.props.answers}
            answersById={this.props.answersById}
            question={this.props.id}
          />
          <AddForm
            placeholder="Add answer..."
            handleSubmit={this.handleAddAnswer}
            btnText="Add Answer"
          />
        </div>
      </div>
    );
  }
});

export default connect()(Question);
