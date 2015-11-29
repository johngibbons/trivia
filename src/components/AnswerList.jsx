import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Answer from './Answer';
import {store} from '../index.jsx';

export default React.createClass({
  mixins: [PureRenderMixin],
  getAnswers(){
    const state = store.getState();
    if (this.props.answers) {
      return this.props.answers.map((id) =>{
        return state.answers[id];
      });
    } else {
      return [];
    }
  },
  chooseAnswer(){
    console.log("selected an answer");
  },
  render(){
    return(
      <div className="list-group">
        {this.getAnswers().map(answer => {
          return (
            <Answer
              key={answer.id}
              text={answer.text}
              questionId={this.props.questionId}
              chooseAnswer={this.chooseAnswer}
            />
          );
        })}
      </div>
    );
  }
});
