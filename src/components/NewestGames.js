import React from 'react';
import {colors} from '../constants';

import TitleBar from './TitleBar';

const NewestGames = ({games, onCloneGame, onClickGame}) => {

  return (
    <div className='newest-games'>
      <TitleBar>Newest Games</TitleBar>
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
            className='table-row no-hover'
          >
          <div className='table-cell emphasized is-clickable'
            onClick={() => onClickGame(game.id)}
          >
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
                <a
                  href='#'
                  className='action-link'
                  onClick={() => onCloneGame(game)}
                >clone this game</a>
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
