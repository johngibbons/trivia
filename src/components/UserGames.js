import React from 'react';
import {colors} from '../constants';
import calculateTotalPossible from '../helpers/calculate_total_possible';
import calculateCurrentPossible from '../helpers/calculate_current_possible';
import classNames from 'classnames';

import TitleBar from './TitleBar';

const UserGames = ({
  user,
  currentUser,
  gamesPlayingOrOwned,
  onClickGame,
  questionsById
}) => {
  return (
    <div>
      <TitleBar>Your Games</TitleBar>
      <div className='legend'>
        <span
          className='color-square'
          style={{backgroundColor: colors.primary}}
        ></span>
        <span
          className='text'
          style={{color: colors.primary}}
        >admin</span>
      </div>
      <div className="flex-table" style={{marginBottom: '5rem'}}>
        <div className='heading table-row'>
          <div className='spacer table-cell' />
          <div className='table-sub-row table-cell'>
            <span className='table-cell'>No. Entries</span>
            <span className='table-cell'>No. Questions</span>
            <span className='table-cell'>Started?</span>
            <span className='table-cell'>Complete?</span>
          </div>
        </div>
        <div>
          {gamesPlayingOrOwned.map((game, index) => {

            let totalPossible = calculateTotalPossible(
              game,
              questionsById
            );
            let currentPossible = calculateCurrentPossible(
              game,
              questionsById
            );
            const isOwner = game.user === currentUser.id;
            const rowClasses = classNames({
              'table-row': true,
              'highlighted': isOwner
            });

            return (
              <div
                key={game.id + index}
                className={rowClasses}
                onClick={() => onClickGame(game.id)}
              >
                <div className='table-cell emphasized'>
                  {game.title ||
                    <span style={{color: colors.grayLight}}>untitled</span>}
                </div>
                <div className='secondary-text table-sub-row table-cell'>
                  <div className='table-cell'>
                    {game.entries ? game.entries.length : 0}
                  </div>
                  <div className='table-cell'>
                    {game.questions ? game.questions.length : 0}
                  </div>
                  <div
                    className='table-cell'
                    style={{
                      color: currentPossible > 0 ?
                      colors.success :
                      colors.danger
                    }}
                  >
                    {currentPossible > 0 ? 'Yes' : 'No'}
                  </div>
                  <div
                    className='table-cell'
                    style={{
                      color: currentPossible === totalPossible ?
                      colors.success :
                        colors.danger
                    }}
                  >
                    {currentPossible === totalPossible ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserGames;
