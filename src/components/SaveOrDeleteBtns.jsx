import React from 'react';

export default React.createClass({
  handleSave(e) {
    e.preventDefault();
    this.props.save(e);
  },
  handleCancel() {
    this.props.cancelEdit();
  },
  render() {
    return(
      <div
        className={this.props.className}
        style={{marginTop: "1em"}}
      >
        <button
          className="btn btn-primary m-t"
          onClick={this.handleSave}
        >
          Save
        </button>
        <span
          className="glyphicon glyphicon-remove cancel"
          style={{
            marginLeft: "1em"
          }}
          onClick={this.handleCancel}
        >
        </span>
      </div>
    );
  }
});
