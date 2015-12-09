import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import classNames from 'classnames';

export default React.createClass({
  toggleInput(e) {
    this.props.toggleQuestionForm();
    this.input.focus();
  },
  cancel() {
    this.input.value = '';
    this.props.toggleQuestionForm();
  },
  save() {
    this.props.save(this.input);
    this.input.value = '';
  },
  render() {
    const formClass = classNames({
      'collapsed': !this.props.questionFormVisible,
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
          <div className='panel-body'>
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Enter question..."
                ref={el => this.input = el}
                onBlur={this.props.toggleQuestionForm}
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
