import React from 'react';

import EditableText from '../components/EditableText';
import QuestionListContainer from '../containers/QuestionListContainer';
import NewQuestionBtn from '../components/NewQuestionBtn';

export default class extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="page-header">
          <h1>
            <EditableText
              className='editable-title'
              placeholder="Enter a name for your game..."
              text={this.props.title}
              saveInput={this.props.updateTitle}
            />
          </h1>
        </div>
        <QuestionListContainer
          questions={this.props.questions}
        />
        <NewQuestionBtn save={this.props.saveQuestion}/>
      </div>
    );
  }
}
