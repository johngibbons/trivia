import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Entry from './Entry';

export default React.createClass({
  render(){
    return(
      <div>
        {Object.keys(this.props.entriesById).map(id => {
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
            />
          );
        })}
      </div>
    );
  }
});
