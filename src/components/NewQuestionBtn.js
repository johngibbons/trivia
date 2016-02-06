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
      'card': true,
      'clearfix': true
    });
    const btnClass = classNames({
      'card': true,
      'clearfix': true,
      'hover-dark-bg': true
    });
    return(
      this.state.editing ?
        <div
          className={formClass}
          style={{flexBasis: '30%'}}
        >
          <div className='card-block'>
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
        :
        <div
          className={btnClass}
          style={{flexBasis: '30%'}}
          onClick={this.toggleInput}
        >
          <div className="card-block">
            <h4 className="no-margin">
              Add a question...
            </h4>
          </div>
        </div>
    );
  }
});
