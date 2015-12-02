import React from 'react';
import SmRemoveBtn from './SmRemoveBtn';
import {connect} from 'react-redux';

const Answer = React.createClass({
  render(){
    return(
      <a href="#"
        className="list-group-item"
      >
        {this.props.text}
        <SmRemoveBtn
          type="REMOVE_ANSWER"
          id={this.props.id}
          question={this.props.question}
        />
      </a>
    );

  }
});

export default connect()(Answer);
