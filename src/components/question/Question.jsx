import React from 'react';
import AnswerList from '../answer/AnswerList';
import AddAnswerForm from '../answer/AddAnswerForm';
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
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.text}</h3>
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
