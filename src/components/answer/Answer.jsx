import React from 'react';

export default React.createClass({
  render(){
    return(
      <a href="#"
        className="list-group-item"
      >
        {this.props.text}
      </a>
    );

  }
});
