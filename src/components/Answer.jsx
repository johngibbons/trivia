import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render(){
    return(
      <div className='radio'>
        <label>
          <input
            type="radio"
            id={'option'+this.props.i}
            name="question"
            value={this.props.text}
            onClick={() => this.props.chooseAnswer(this.props.text)}
          />
          {this.props.text}
        </label>
      </div>
    );

  }
});
