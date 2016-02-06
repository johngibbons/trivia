import React from 'react';
import EditableText from '../components/EditableText';
import classNames from 'classnames';

class EditableTextContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.showInput ? {editing: true} : {editing: false};
  }

  componentWillReceiveProps(nextProps) {
    this.state = this.props.showInput ? {editing: true} : {editing: false};
  }

  render() {
    return(
      <EditableText
        startEdit={this.startEdit.bind(this)}
        cancelEdit={this.cancelEdit.bind(this)}
        saveEdit={this.saveEdit.bind(this)}
        hidden={!this.state.editing}
        {...this.props}
      />
    );
  }

  startEdit(input) {
    this.setState({editing: true});
    input.value = this.props.value;
    if (this.props.type === 'text') {
      input.setSelectionRange(0, input.value.length);
    }
  }

  saveEdit(e, input) {
    if (!e.key) {
      e.preventDefault();
    }
    if (e.key === 'Enter' || !e.key && input.value.length > 0) {
      this.props.save(this.props.id, this.props.attr, input.value);
      this.setState({editing: false});
      if (this.props.isLast) {
        this.props.onAdd();
      }
    }
  }

  cancelEdit() {
    this.setState({editing: false});
    if (this.props.isLast) {
      this.props.onRemove(this.props.id);
    }
  }
}

EditableTextContainer.defaultProps = {
  type: 'text'
};

EditableTextContainer.PropTypes = {
  id: React.PropTypes.string.isRequired,
  attr: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf['text', 'number', 'email', 'password'],
  value: React.PropTypes.oneOfType([
    'string',
    'number'
  ]),
  placeholder: React.PropTypes.string,
  save: React.PropTypes.func.isRequired
};

export default EditableTextContainer;
