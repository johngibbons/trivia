import React from 'react';
import Answer from './Answer';

export default React.createClass({
  getAnswers(){
    return this.props.answers || [];
  },
  render(){
    return(
      <fieldset>
        {this.getAnswers().map((answer, i) => {
          return <Answer text={answer} key={answer} i={i}/>
        })}
      </fieldset>
    );
  }
});
