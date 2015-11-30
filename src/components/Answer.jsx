import React from 'react';

export default React.createClass({
  render(){
    return(
      <a href="#"
        className="list-group-item"
        onClick={() => this.props.chooseAnswer(this.props.text)}
      >
        {this.props.text}
      </a>
    );

  }
});
