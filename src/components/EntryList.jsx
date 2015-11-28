import React from 'react';
import Entry from './Entry';

export default React.createClass({
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
