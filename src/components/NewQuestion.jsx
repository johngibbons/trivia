import React from 'react';
import EditableText from './EditableText';
import addQuestion from '../actions/index';

export default React.createClass({
  saveTitle(){
    addQuestion()
  },
  render(){
    return(
      <div className="col-md-4">
        <div className="panel panel-default clearfix">
          <div className="panel-body">
            <h4 className="no-margin">
              <EditableText
                placeholder="Add a question..."
                saveInput={this.saveTitle}
              />
            </h4>
            <div
              className="row"
              style={{display: "none"}}
              >
              <div className="form-group col-md-4">
                <label>Point Value</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="1"
                />
              </div>
            </div>
            <div
              className="form-group"
              style={{display: "none"}}
              >
              <label>Possible Answers</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add an answer..." />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
