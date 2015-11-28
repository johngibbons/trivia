import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
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
