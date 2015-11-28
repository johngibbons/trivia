import React from 'react';
import Entry from './Entry';

export default React.createClass({
  render(){
    return (
      <EntryList entries={this.props.entries} />
    );
  }
});
