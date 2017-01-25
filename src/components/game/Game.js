import React, { PropTypes } from 'react'
import { connect } from 'react-redux';

import {
  createGame,
  updateGame
} from '../../actions/game-actions';

const Game = ({
  params,
  title,
  onCreate,
  onChange
}) => {
  return (
    <input
      type='text'
      value={title}
      onChange={(e) => onChange({
        id: params.id,
        title: e.target.value
      })}
    />
  )
}

Game.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = ({ games }, ownProps) => ({
  games: games.get(ownProps.params.id)
});

export default connect(mapStateToProps, {
  onCreate: createGame,
  onChange: updateGame
})(Game)
