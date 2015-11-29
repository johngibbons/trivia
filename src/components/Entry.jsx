import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import QuestionList from './QuestionList';
import {store} from '../index';

export default React.createClass({
  mixins: [PureRenderMixin],
  render(){
    return (
      <div>
        <div className="jumbotron">
          <h1>{this.props.title}<span className="label label-default">{this.props.rank}</span></h1>
          <p className="entryScore">score: {this.props.score}</p>
        </div>
        <QuestionList questions={this.props.questions} />
      </div>
    );
  }
});
