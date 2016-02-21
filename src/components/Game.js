import React from 'react';
import {Link} from 'react-router';
import {colors} from '../constants';

import TitleBar from './TitleBar';
import EditableTextContainer from '../containers/EditableTextContainer';
import NavLink from './NavLink';
import Dropdown from './Dropdown';
import DropdownToggle from './DropdownToggle';
import DropdownLink from './DropdownLink';
import DropdownMenu from './DropdownMenu';

const Game = (props) => {

  const getTitleBarText = () => {
    if (props.entry && props.context === 'entry') {
      if (!props.hasGameStarted && props.currentUser.id === props.entry.user) {
        return (
          <EditableTextContainer
            id={props.entry.id}
            attr="name"
            placeholder="Entry name..."
            value={props.entry.name}
            save={props.onUpdateEntry}
            showInput={!props.entry.name}
          />
        );
      } else {
        return props.entry.name;
      }
    } else {
      if (props.isEditable && props.isOwner) {
        return (
          <EditableTextContainer
            id={props.id}
            attr='title'
            placeholder='Enter a name for your game...'
            value={props.title}
            showInput={!props.title}
            save={props.onUpdate}
          />
        );
      } else {
        return props.title || <span style={{color: colors.grayLight}}>untitled</span>;
      }
    }
  };

  return (
    <div>
      <TitleBar>
        {getTitleBarText()}
      </TitleBar>
      <nav className='game-nav navbar navbar-light'>
        <div className='nav navbar-nav'>
          {Object.keys(props.currentUserEntry).length ?
            <NavLink
              active={props.entry && props.currentUserEntry.id === props.entry.id}
              url={`/entries/${props.currentUserEntry.id}`}
            >{props.currentUserEntry.name}</NavLink>
          :
            <NavLink
              className='create-entry'
              onClick={props.onAddEntry}
            >Create Your Entry</NavLink>
          }
          <NavLink
            active={props.context === 'show'}
            url={`/games/${props.id}`}
          >Leaderboard</NavLink>
        {props.isOwner &&
          <Dropdown className={`nav-item ${(props.context === 'edit' || props.context === 'run') && 'active'}`}>
            <DropdownToggle className='nav-link'>
              Game Admin
            </DropdownToggle>
            <DropdownMenu>
              <DropdownLink
                url={`/games/${props.id}/edit`}
              >
                Edit Game
              </DropdownLink>
              <DropdownLink
                url={`/games/${props.id}/run`}
              >
                Enter Answers
              </DropdownLink>
            </DropdownMenu>
          </Dropdown>
        }
        </div>
      </nav>
      {React.cloneElement(props.children, {...props})}
    </div>
  );
};

export default Game;
