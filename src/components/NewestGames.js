import React from 'react';
import {colors} from '../constants';

const NewestGames = ({games, onCloneGame}) => {

  return (
    <div className='newest-games'>
      <div className='flex-table'>
        <div className='heading table-row'>
          <div className='spacer table-cell' />
          <div className='table-sub-row table-cell'>
            <span className='table-cell'>No. Entries</span>
            <span className='table-cell'>No. Questions</span>
            <span className='spacer table-cell' />
          </div>
        </div>
      {games.map((game) => {
        return (
          <div
            key={game.id}
            className='table-row'
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
              <div className='table-cell'>
                <a href='#' onClick={() => onCloneGame(game)}>Clone game</a>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );

};

export default NewestGames;
