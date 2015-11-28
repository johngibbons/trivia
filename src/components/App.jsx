import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Question from './Question';

export default React.createClass({
  render(){
    const answers = ['Brad Pitt', 'Johnny Depp', 'George Clooney', 'Leonardo Dicaprio'];
    return(
      <Question
        isMaster={false}
        hasResult={false}
        isCorrect={false}
        ptValue = {10}
        answers = {answers}
        text = "Best Actor"
      />
    );
  }
});
