import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Entry from './Entry';

export default React.createClass({
  mixins: [PureRenderMixin],
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
