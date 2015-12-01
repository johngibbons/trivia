import React from 'react';
import {connect} from 'react-redux';

const Answer = React.createClass({
  handleRemove(){
    this.props.dispatch({
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

export default connect()(Answer);
