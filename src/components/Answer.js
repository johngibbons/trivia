import React from 'react';
import SmRemoveBtn from './SmRemoveBtn';
import {removeAnswer} from '../actions/index';

export default React.createClass({
  handleRemoveAnswer(){
    removeAnswer(this.props);
  },
  render(){
    return(
      <a href="#"
        className="list-group-item"
      >
        {this.props.text}
        <SmRemoveBtn
          handleRemove={this.handleRemoveAnswer}
        />
      </a>
    );

  }
});
