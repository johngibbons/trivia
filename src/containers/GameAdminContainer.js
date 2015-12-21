import React from 'react';
import {connect} from 'react-redux';
import EditableTextContainer from './EditableTextContainer';

class GameAdminContainer extends React.Component {
  render() {
    const game = this.props.gamesById[this.props.params.game];
    return(
      <div>
        <div className="page-header">
          <h1>
            <EditableTextContainer
              placeholder="Enter a name for your game..."
              value={game.title}
              save={this.updateTitle.bind(this)}
              showInput={true}
            />
          </h1>
          <Link to={`/games/${id}`}>Save And Finish</Link>
        </div>
        {this.props.children}
      </div>
    );
  }

  updateTitle(text) {
    this.props.dispatch(updateGameAttr({id: this.props.params.id, title: text}));
  }
}

function mapStateToProps(state) {
  return {
    gamesById: state.gamesById
  }
}

connect(mapStateToProps)(GameAdminContainer);
