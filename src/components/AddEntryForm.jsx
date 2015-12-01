import React from 'react';
import {connect} from 'react-redux';

let nextEntryId = 0;

const AddEntryForm = React.createClass({
  render(){
    return(
      <form>
        <div className="form-group">
          <label htmlFor="entryTitle">Entry Title</label>
          <input
            type="text"
            id="entryTitle"
            placeholder="Enter a name for your entry..."
            className="form-control"
            ref={node => {
              this.input = node;
            }}
          />
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              ref={node => {
                this.isMaster = node;
              }}
            /> master
          </label>
        </div>
        <button
          className="btn btn-default"
          onClick={(e) => {
            e.preventDefault();
            this.props.dispatch({
              type: 'ADD_ENTRY',
              id: nextEntryId++,
              title: this.input.value,
              isMaster: this.isMaster.checked,
              game: this.props.game
            });
            this.input.value = '';
            this.isMaster.checked = false;
          }}
        >
        Create New Entry
        </button>
      </form>
    );
  }
});

export default connect(state => state)(AddEntryForm);
