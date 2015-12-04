import React from 'react';

export default React.createClass({
  componentDidMount(){
    this.titleInput.focus();
  },
  handleUpdate(e){
    if (this.key === 'enter' || !this.key) {
      e.preventDefault();
      this.props.handleUpdate(this.titleInput);
    }
  },
  render(){
    return(
      <h1>
        {!!this.props.title ?
          this.props.title :
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a name for your entry..."
              ref={node => {
                this.titleInput = node;
              }}
              onKeyDown={this.handleUpdate}
            />
            <button
              className="btn btn-primary"
              onClick={this.handleUpdate}
            >Save</button>
          </form>
        }
      </h1>
    );
  }
});
