import React from 'react';
import AnswerList from './AnswerList';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import SmRemoveBtn from './SmRemoveBtn';
import classNames from 'classnames';

let nextAnswerId = 0;
export default React.createClass({
  handleSaveAnswer() {
    this.props.addAnswer(this.input, this.props);
    this.input.value = '';
  },
  cancel() {
    this.input.blur();
  },
  render(){
    let questionClass = classNames({
      'panel': true,
      'panel-default': true,
      'question': true,
      'correct': this.props.hasResult && this.props.isCorrect,
      'incorrect': this.props.hasResult && !this.props.isCorrect
    });
    return (
      <div className="col-md-4">
        <div className={questionClass} >
          <div className="panel-heading clearfix">
            <h3 className="panel-title pull-left">{this.props.text}</h3>
            <SmRemoveBtn
              handleRemove={this.props.removeQuestion}
              id={this.props.id}
              game={this.props.game}
            />
          </div>
          <div className="panel-body">
            <AnswerList
              answers={this.props.answers}
              answersById={this.props.answersById}
              question={this.props.id}
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
                save={this.handleSaveAnswer}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
});
