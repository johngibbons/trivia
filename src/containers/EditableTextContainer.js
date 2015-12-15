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
        startEdit={this.startEdit.bind(this)}
        cancelEdit={this.cancelEdit.bind(this)}
        saveEdit={this.saveEdit.bind(this)}
        {...this.props}
      />
    );
  }

  startEdit(input) {
    this.setState({editing: true});
    input.value = this.props.value;
    input.setSelectionRange(0, input.value.length);
  }

  saveEdit(e, input) {
    if (e.key === 'Enter' || !e.key) {
      this.props.save(input.value);
      this.setState({editing: false});
    }
  }

  cancelEdit() {
    this.setState({editing: false});
  }
};
