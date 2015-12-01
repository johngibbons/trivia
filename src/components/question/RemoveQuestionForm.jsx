import React from 'react';
import {store} from '../../index';

export default React.createClass({
  handleRemove(){
    store.dispatch({
      type: 'REMOVE_QUESTION',
      id: this.props.id,
      entry: this.props.entry
    });
  },
  render(){
    return(
      <button
        type="button"
        className="btn btn-danger btn-xs pull-right"
        onClick={this.handleRemove}
      >x</button>
    );
  }
});
