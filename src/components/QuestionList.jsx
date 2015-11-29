import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Question from './Question';
import AddQuestionForm from './AddQuestionForm';

export default React.createClass({
  mixins: [PureRenderMixin],
  getQuestions(){
    return this.props.questions;
  },
  render(){
    return (
      <div className="row">
        <AddQuestionForm />
        {Object.keys(this.getQuestions()).map(id => {
          const question = this.getQuestions()[id];
          return (
            <Question
              id={question.id}
              key={question.id}
              isMaster={question.isMaster}
              hasResult={question.hasResult}
              isCorrect={question.isCorrect}
              ptValue={question.ptValue}
              answers={question.answers}
              text={question.text}
            />
          );
        })}
      </div>
    );
  }
});
