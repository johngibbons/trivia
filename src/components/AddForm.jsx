import React from 'react';

export default React.createClass({
  sendInput(event){
    if (event.key === 'Enter' || !event.key) {
      event.preventDefault();
      this.props.handleSubmit(this.input);
      this.input.value = '';
    }
  },
  toggleSaveBtn(){
    this.btn.style.display === "none" ?
      this.btn.style.display = "block" :
      this.btn.style.display = "none";
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
            onFocus={this.toggleSaveBtn}
            onBlur={this.toggleSaveBtn}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={this.sendInput}
          ref={ref => this.btn = ref}
          style={{display: "none"}}
        >
          {this.props.btnText}
        </button>
      </form>
    );
  }
});
