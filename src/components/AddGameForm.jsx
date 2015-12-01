import React from 'react';
import {connect} from 'react-redux';

let nextGameId = 0;

const AddGameForm = React.createClass({
  handleSubmit(e){
    if (e.key === 'Enter' || !e.key) {
      e.preventDefault();
      this.addGame();
    }
  },
  addGame(){
    this.props.dispatch({
      type: 'ADD_GAME',
      id: nextGameId++,
      title: this.input.value
    });
    this.input.value = '';
  },
  render(){
    return(
      <form>
        <div className="form-group">
          <label htmlFor="gameTitle">Game Title</label>
          <input
            type="text"
            id="gameTitle"
            placeholder="Enter a game title..."
            className="form-control"
            ref={node => {
              this.input = node;
            }}
            onKeyPress={this.handleSubmit}
          />
        </div>
        <button
          className="btn btn-default"
          onClick={this.handleSubmit}
        >Create Game</button>
      </form>
    );
  }
});

export default connect()(AddGameForm);
