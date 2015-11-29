import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Entry from './Entry';

export default React.createClass({
  mixins: [PureRenderMixin],
  render(){
    return(
      this.props.entries.map(entry => {
        return (<Entry
          key={entry.id}
          name={entry.name}
          user={entry.user}
          questionList={entry.questionList}
          score={entry.score}
          master={entry.master}
        />);
      });
    );
  }
});
