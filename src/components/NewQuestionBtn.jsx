import React from 'react';
import classNames from 'classnames';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import addQuestion from '../actions/index';

export default React.createClass({
  toggleInput(e){
    this.input.focus();
    this.props.toggleQuestionForm();
  },
  cancel(){
    this.input.value = '';
    this.props.toggleQuestionForm();
  },
  save(){
    this.props.save(this.input);
    this.props.toggleQuestionForm();
  },
  render(){
    const formClass = classNames({
      'hidden': !this.props.questionFormVisible,
      'panel': true,
      'panel-default': true,
      'clearfix': true
    });
    const btnClass = classNames({
      'hidden': this.props.questionFormVisible,
      'panel': true,
      'panel-default': true,
      'clearfix': true,
      'hover-dark-bg': true
    });
    return(
      <div className="col-md-4">
        <div
          className={btnClass}
          onClick={this.toggleInput}
        >
          <div className="panel-body">
            <h4 className="no-margin">
              Add a question...
            </h4>
          </div>
        </div>
        <div
          className={formClass}
        >
          <div className="panel-body">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Enter question..."
                ref={el => this.input = el}
              />
              <SaveOrDeleteBtns
                cancelEdit={this.cancel}
                save={this.save}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
});
