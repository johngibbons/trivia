import React from 'react';
import {connect} from 'react-redux';

const RemoveQuestionForm = React.createClass({
  handleRemove(){
    this.props.dispatch({
      type: 'REMOVE_QUESTION',
      id: this.props.id,
      entry: this.props.entry,
      game: this.props.game
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

export default connect()(RemoveQuestionForm);
