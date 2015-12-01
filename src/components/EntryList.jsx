import React from 'react';
import Entry from './Entry';

export default React.createClass({
  getEntries(){
    return this.props.entries || [];
  },
  render(){
    return(
      <div>
        {this.getEntries().map(id => {
          const entry = this.props.entriesById[id];
          return(
            <Entry
              id={entry.id}
              key={entry.id}
              title={entry.title}
              score={entry.score}
              rank={entry.rank}
              isMaster={entry.isMaster}
              questions={entry.questions}
              questionsById={this.props.questionsById}
              answersById={this.props.answersById}
              game={this.props.game}
            />
          );
        })}
      </div>
    );
  }
});
