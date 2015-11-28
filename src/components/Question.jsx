import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AnswerList from './AnswerList';
import classNames from 'classnames';

export default React.createClass({
  mixins: [PureRenderMixin],
  render(){

    let questionClass = classNames({
      'panel': true,
      'panel-default': true,
      'question': true,
      'col-md-4': true,
      'correct': this.props.hasResult && this.props.isCorrect,
      'incorrect': this.props.hasResult && !this.props.isCorrect
    });

    return (
      <div className={questionClass} >
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.text}</h3>
        </div>
        <div className="panel-body">
          <AnswerList answers={this.props.answers} />
        </div>
      </div>
    );
  }
});
