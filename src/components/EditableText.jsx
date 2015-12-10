import React from 'react';
import SaveOrDeleteBtns from './SaveOrDeleteBtns';
import classNames from 'classnames';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {editing: false};
  }

  render() {
    const formClasses = classNames({
      'hidden': !this.state.editing,
      'form-control': true
    });
    const btnsClasses = classNames({
      'hidden': !this.state.editing
    });
    const textClasses = classNames({
      'hidden': this.state.editing,
      'editable': true
    })
    return(
      <div>
        <span
          className={textClasses}
          onClick={this.showBtns.bind(this)}
        >
          {this.props.text}
        </span>
        <input
          type="text"
          className={formClasses}
          placeholder={this.props.placeholder}
          ref= {(node) => this.input = node }
          onKeyDown={this.saveInput.bind(this)}
        />
        <SaveOrDeleteBtns
          className={btnsClasses}
          cancelEdit={this.cancelEdit.bind(this)}
          save={this.saveInput.bind(this)}
        />
      </div>
    );
  }

  showBtns() {
    this.setState({editing: true});
    this.input.value = this.props.text;
    this.input.setSelectionRange(0, this.input.value.length);
  }

  saveInput(e) {
    if (e.key === 'Enter' || !e.key) {
      this.props.saveInput(this.input.value);
      this.setState({editing: false});
      this.input.blur();
    }
  }

  cancelEdit() {
    this.setState({editing: false});
  }
};
