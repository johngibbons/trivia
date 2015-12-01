import React from 'react';
import {store} from '../../index'

export default React.createClass({
  handleRemove(){
    store.dispatch({
      type: "REMOVE_ANSWER",
      id: this.props.id,
      question: this.props.question
    });
  },
  render(){
    return(
      <a href="#"
        className="list-group-item"
      >
        {this.props.text}
        <button
          className="btn btn-danger btn-xs pull-right"
          onClick={this.handleRemove}
        >x</button>
      </a>
    );

  }
});
