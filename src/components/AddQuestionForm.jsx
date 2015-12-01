import React from 'react';
import {connect} from 'react-redux';

let nextQuestionId = 0;

const AddQuestionForm = React.createClass({
  render(){
    return (
      <div className="col-md-4">
        <input
          type="text"
          placeholder="type question here.."
          className="form-control"
          ref={node => {
            this.input = node;
          }}
        />
        <button
          className="btn btn-default"
          onClick={() => {
            this.props.dispatch({
              type: 'ADD_QUESTION',
              id: nextQuestionId++,
              text: this.input.value,
              entry: this.props.entry,
              game: this.props.game
            });
            this.input.value = '';
          }}
        >
          Add Question
        </button>
      </div>
    );
  }
});

export default connect()(AddQuestionForm);
