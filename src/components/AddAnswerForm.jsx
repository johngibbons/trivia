import React from 'react';
import {connect} from 'react-redux';

let nextAnswerId = 0;

const AddAnswerForm = () => {
  return(
    <div className="form-group">
      <input
        type="text"
        placeholder="type answer here..."
        className="form-control"
        ref={node => {
          this.input = node;
        }}
      />
      <button
        className="btn btn-default"
        onClick={() => {
          this.props.dispatch({
            type: 'ADD_ANSWER',
            id: nextAnswerId++,
            text: this.input.value,
            question: this.props.question
          });
          this.input.value = '';
        }}
      >
        Add Answer...
      </button>
    </div>
  );
};

export default connect()(AddAnswerForm);
