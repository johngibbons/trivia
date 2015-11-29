import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../index';

let nextAnswerId = 0;

export default React.createClass({
  mixins: [PureRenderMixin],
  render(){
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
            store.dispatch({
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
  }
});
