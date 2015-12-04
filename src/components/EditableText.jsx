import React from 'react';

export default React.createClass({
  saveInput(e){
    if (e.key === 'Enter' || !e.key) {
      this.input.blur();
      this.props.saveInput(this.input.value);
      this.btn.style.display = "none";
    }
  },
  checkIfEmpty(){
    if (this.input.value.length === 0) {
      this.btn.style.display = "none";
    }
  },
  showBtn(){
    this.btn.style.display = "block";
  },
  render(){
    return(
      <div>
        <input
          type="text"
          className="editable-title"
          placeholder={this.props.placeholder}
          ref={el => this.input = el}
          onKeyDown={this.saveInput}
          onBlur={this.checkIfEmpty}
          onFocus={this.showBtn}
        />
        <button
          className="btn btn-primary m-t"
          style={{
            display: "none",
            marginTop: "1rem"
          }}
          ref={el => this.btn = el}
          onClick={this.saveInput}
        >
          Save
        </button>
      </div>
    );
  }
});
