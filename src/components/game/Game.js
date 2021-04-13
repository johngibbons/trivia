import React, { PropTypes } from "react";
import { connect } from "react-redux";
import GameModel from "../../models/Game";

const Game = ({ game }) => {
  return <h1>{game.name}</h1>;
};

Game.propTypes = {
  game: PropTypes.instanceOf(GameModel),
};

const mapStateToProps = ({ games }, ownProps) => ({
  game: games.get(ownProps.routeParams.id),
});

export default connect(mapStateToProps)(Game);
