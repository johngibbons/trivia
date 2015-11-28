import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Answer from './Answer';
import classNames from 'classnames';

export default React.createClass({
  mixins: [PureRenderMixin],
  getAnswers(){
    return this.props.answers || [];
  },
  setCorrect(){
    return this.props.isMaster && this.props.chooseAnswer;
  },
  render(){

    let questionClass = classNames({
      'panel-body': true,
      'question': true,
      'correct': this.props.hasResult && this.props.isCorrect,
      'incorrect': this.props.hasResult && !this.props.isCorrect
    });

    return (
      <div className={questionClass} >
        <fieldset>
          {this.getAnswers().map((answer, i) => {
            return <Answer text={answer} key={answer} i={i}/>
          })}
        </fieldset>
      </div>
    );
  }
});
