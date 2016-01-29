import React from 'react';
import {colors} from '../constants';
import calculateTotalPossible from '../helpers/calculate_total_possible';
import calculateCurrentPossible from '../helpers/calculate_current_possible';

const UserGames = ({
  user,
  currentUser,
  games,
  onClickGame,
  questionsById
}) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>No. Entries</th>
          <th>No. Questions</th>
          <th>Started?</th>
          <th>Complete?</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => {

          let totalPossible = calculateTotalPossible(
            game,
            questionsById
          );
          let currentPossible = calculateCurrentPossible(
            game,
            questionsById
          );

          return (
            <tr key={game.id} onClick={() => onClickGame(game.id)}>
              <td>
                {game.title ||
                  <span style={{color: colors.grayLight}}>untitled</span>}
              </td>
              <td>
                {game.entries ? game.entries.length : 0}
              </td>
              <td>
                {game.questions ? game.questions.length : 0}
              </td>
              <td style={{
                color: currentPossible > 0 ?
                  colors.success :
                    colors.danger
              }}>
                {currentPossible > 0 ? 'Yes' : 'No'}
              </td>
              <td style={{
                color: currentPossible === totalPossible ?
                  colors.success :
                    colors.danger
              }}>
                {currentPossible === totalPossible ? 'Yes' : 'No'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserGames;
