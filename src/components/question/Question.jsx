import React from 'react';
import AnswerList from '../answer/AnswerList';
import AddAnswerForm from '../answer/AddAnswerForm';
import RemoveQuestionForm from './RemoveQuestionForm';
import classNames from 'classnames';

export default React.createClass({
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
            />
          </div>
          <AnswerList
            answers={this.props.answers}
            answersById={this.props.answersById}
            question={this.props.id}
          />
          {this.props.isMaster && <AddAnswerForm question={this.props.id} />}
        </div>
      </div>
    );
  }
});
