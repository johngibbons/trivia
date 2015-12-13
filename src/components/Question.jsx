import React from 'react';
import AnswerList from './AnswerList';
import EditableText from './EditableText';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import SmRemoveBtn from './SmRemoveBtn';
import classNames from 'classnames';

export default class extends React.Component {

  render() {
    const question = this.props.question;
    let questionClass = classNames({
      'panel': true,
      'panel-default': true,
      'question': true
    });
    return (
      <div className="col-md-4">
        <div className={questionClass} >
          <div className="panel-heading clearfix">
            <h3 className="no-margin">
              <EditableText
                className={'panel-title'}
                placeholder="Enter a question..."
                text={question.text}
                saveInput={this.updateTitle.bind(this)}
              />
            </h3>
            <SmRemoveBtn
              handleRemove={this.props.removeQuestion}
              id={question.id}
              game={question.game}
            />
          </div>
          <div className="panel-body">
            <AnswerList
              answers={question.answers}
              answersById={this.props.answersById}
              question={question.id}
            />
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Enter answer..."
                ref={el => this.input = el}
              />
              <SaveOrDeleteBtns
                cancelEdit={this.cancel}
                save={this.handleSaveAnswer.bind(this)}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }

  updateTitle(text) {
    this.props.updateTitle(text, this.props.id);
  }

  handleSaveAnswer() {
    this.props.addAnswer(this.input, this.props.question);
    this.input.value = '';
  }

  cancel() {
    this.input.blur();
  }

};
