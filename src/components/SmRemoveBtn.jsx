import React from 'react';

export default React.createClass({
  handleRemove(e){
    e.preventDefault();
    this.props.handleRemove(this.props);
  },
  render(){
    return(
      <button
        type="button"
        className="btn btn-danger btn-xs pull-right"
        onClick={this.handleRemove}
      >x</button>
    );
  }
});
