import React from 'react';

export default React.createClass({
  sendInput(event){
    if ((event.key && event.key === 13) || !event.key) {
      this.props.handleSubmit(this.input);
    }
  },
  render(){
    let input = null;
    return(
      <div className="form-group">
        <input
          type="text"
          placeholder={this.props.placeholder}
          className="form-control"
          ref={node => this.input=node}
          onKeyPress={this.sendInput}
        />
        <button
          className="btn btn-default"
          onClick={this.sendInput}
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
});
