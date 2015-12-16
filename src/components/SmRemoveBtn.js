import React from 'react';

export default React.createClass({
  handleRemove(e){
    e.preventDefault();
    this.props.handleRemove(this.props);
  },
  render(){
    return(
      <span
        className='glyphicon glyphicon-trash remove right-centered'
        aria-label='Delete'
        onClick={this.handleRemove}
      >
      </span>
    );
  }
});
