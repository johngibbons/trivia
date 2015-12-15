import React from 'react';
import EditableText from '../components/EditableText';
import classNames from 'classnames';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.showInput ? {editing: true} : {editing: false};
  }

  render() {
    const btnsClasses = classNames({
      'hidden': !this.state.editing
    });
    const textClasses = classNames({
      'hidden': this.state.editing,
      'editable': true
    });
    const formClasses = classNames({
      'hidden': !this.state.editing,
      'form-control': true
    });
    return(
      <EditableText
        textClasses={textClasses}
        btnsClasses={btnsClasses}
        formClasses={formClasses}
        formValue={this.state.formValue}
        startEdit={this.startEdit.bind(this)}
        cancelEdit={this.cancelEdit.bind(this)}
        updateForm={this.updateForm.bind(this)}
        saveEdit={this.saveEdit.bind(this)}
        {...this.props}
      />
    );
  }

  startEdit() {
    this.setState({editing: true});
  }

  updateForm(e) {
    this.setState({formValue: e.target.value});
  }

  saveEdit(e) {
    console.log('event:', e);
    if (e.key === 'Enter') {
      this.props.save(e.target.value);
      this.setState({editing: false});
      e.target.blur();
    }
  }

  cancelEdit() {
    this.setState({editing: false});
  }
};
