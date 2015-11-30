import React from 'react';
import {store} from '../index';

let nextQuestionId = 0;

export default React.createClass({
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
            store.dispatch({
              type: 'ADD_QUESTION',
              id: nextQuestionId++,
              text: this.input.value
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
