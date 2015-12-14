import React from 'react';

export default React.createClass({
  handleRemove(e){
    e.preventDefault();
    this.props.handleRemove(this.props);
  },
  render(){
    return(
      <span
        className='remove pull-right'
        onClick={this.handleRemove}
      >
        x
      </span>
    );
  }
});
