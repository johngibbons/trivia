import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AnswerList from './AnswerList';
import AddAnswerForm from './AddAnswerForm';
import classNames from 'classnames';

export default React.createClass({
  mixins: [PureRenderMixin],
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
          <AnswerList answers={this.props.answers} questionId={this.props.id} />
          <AddAnswerForm question={this.props.id} />
        </div>
      </div>
    );
  }
});
