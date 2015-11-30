import React from 'react';
import Entry from './Entry';

export default React.createClass({
  getQuestions(){
    return this.props.appState.questions || {};
  },
  render(){
    return(
      <Entry
        title="The Notorious G.I.B."
        score={125}
        rank={"2nd"}
        questions={this.getQuestions()}
      />
    );
  }
});
