import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import classNames from 'classnames';

export default React.createClass({
  getInitialState() {
    return {editing: false};
  },
  toggleInput(e) {
    this.setState({editing: true});
    this.input.focus();
  },
  handleBlur(e) {
    e.preventDefault();
    this.setState({editing: false});
  },
  cancel() {
    this.input.value = '';
    this.setState({editing: false});
  },
  save(e) {
    e.preventDefault();
    this.props.save(this.input);
    this.input.value = '';
  },
  render() {
    const formClass = classNames({
      'collapsed': !this.state.editing,
      'panel': true,
      'panel-default': true,
      'clearfix': true
    });
    const btnClass = classNames({
      'hidden': this.state.editing,
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
            <form onSubmit={this.save}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter question..."
                ref={el => this.input = el}
                onBlur={this.handleBlur}
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
