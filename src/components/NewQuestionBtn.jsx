import React from 'react';

import addQuestion from '../actions/index';

export default React.createClass({
  saveTitle(input){
    console.log('saved question');
  },
  render(){
    return(
      <div className="col-md-4">
        <div
          className="panel panel-default clearfix hover-dark-bg"
          onClick={this.saveTitle}
        >
          <div className="panel-body">
            <h4 className="no-margin">
              Add a question...
            </h4>
          </div>
        </div>
      </div>
    );
  }
});
