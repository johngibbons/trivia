import React from 'react';

export default React.createClass({
  sendInput(event){
    if (event.key === 'Enter' || !event.key) {
      event.preventDefault();
      this.props.handleSubmit(this.input);
      this.input.value = '';
    }
  },
  render(){
    let input = null;
    return(
      <form>
        <div className="form-group">
          <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
          <input
            type="text"
            id={this.props.htmlFor}
            placeholder={this.props.placeholder}
            className="form-control"
            ref={node => this.input=node}
            onKeyPress={this.sendInput}
          />
        </div>
        <button
          className="btn btn-default"
          onClick={this.sendInput}
        >
          {this.props.btnText}
        </button>
      </form>
    );
  }
});
