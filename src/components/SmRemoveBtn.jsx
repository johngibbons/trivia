import React from 'react';
import {connect} from 'react-redux';

const SmRemoveBtn = React.createClass({
  handleRemove(e){
    e.preventDefault();
    this.props.handleRemove();
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

export default connect()(SmRemoveBtn);
