import React from 'react';
import {Link} from 'react-router';

import TitleBar from './TitleBar';
import EditableTextContainer from '../containers/EditableTextContainer';
import {colors} from '../constants';

const Game = (props) => {
  return (
    <div>
      <TitleBar>
      {props.isEditable ?
        <EditableTextContainer
          id={props.id}
          attr='title'
          placeholder='Enter a name for your game...'
          value={props.title}
          showInput={!props.title}
          save={props.onUpdate}
        />
        :
        props.title || <span style={{color: colors.grayLight}}>untitled</span>}
      </TitleBar>
      <nav className='game-nav navbar navbar-light'>
        <div className='nav navbar-nav'>
          {props.currentUserEntry ?
            <Link
              to={`/entries/${props.currentUserEntry.id}`}
              className='nav-item nav-link'
            >Your Entry</Link>
          :
            <a
              href='#'
              className='nav-item nav-link'
              onClick={props.onAddEntry}
            >Create Your Entry</a>
          }
          <Link
            to={`/games/${props.id}`}
            className='nav-item nav-link'
          >Leaderboard</Link>
        {props.isOwner &&
          <div className='dropdown nav-item'>
            <a
              href='#'
              className='dropdown-toggle nav-link'
            >Game Admin</a>
            <div className='dropdown-menu'>
              <Link
                to={`/games/${props.id}/edit`}
                className='dropdown-item'
              >Edit Game</Link>
              <Link
                to={`/games/${props.id}/run`}
                className='dropdown-item'
                >Enter Answers</Link>
            </div>
          </div>
        }
        </div>
      </nav>
      {React.cloneElement(props.children, {...props})}
    </div>
  );
};

export default Game;
