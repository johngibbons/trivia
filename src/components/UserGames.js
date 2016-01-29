import React from 'react';
import {colors} from '../constants';

const UserGames = ({
  user,
  currentUser,
  games,
  onClickGame
}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => {
          return (
            <tr key={game.id} onClick={() => onClickGame(game.id)}>
              <td>
                {game.title ||
                  <span style={{color: colors.gray}}>untitled</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserGames;
