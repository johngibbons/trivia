import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Entry from './Entry';

export default React.createClass({
  render(){
    let questions = [
      {
        id: 1,
        isMaster: false,
        hasResult: false,
        isCorrect: true,
        ptValue: 10,
        answers: [
          'Brad Pitt',
          'Johnny Depp',
          'George Clooney',
          'Leonardo Dicaprio'
        ],
        text: 'Best Actor'
      },
      {
        id: 2,
        isMaster: false,
        hasResult: false,
        isCorrect: true,
        ptValue: 5,
        answers: [
          'The Departed',
          'Gladiator',
          'The Great Beauty',
          'Avatar',
          'Shakspeare in Love'
        ],
        text: 'Best Picture'
      }
    ];
    return(
      <Entry
        title="The Notorious G.I.B."
        score={125}
        rank={"2nd"}
        questions={questions}
      />
    );
  }
});
