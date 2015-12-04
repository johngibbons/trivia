import React from 'react';
import EditableTitle from './EditableText';
import NewQuestion from './NewQuestion';
import QuestionList from './QuestionList';

export default React.createClass({
  saveTitle(){
    console.log("Title saved!");
  },
  render(){
    return(
      <div className="container">
        <div className="page-header">
          <h1>
            <EditableTitle
              placeholder="Enter a name for your game..."
              saveInput={this.saveTitle}
            />
          </h1>
        </div>
        <div className="row">
          <QuestionList />
          <NewQuestion />
        </div>
      </div>
    );
  }
});
