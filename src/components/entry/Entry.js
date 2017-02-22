import React, { PropTypes } from 'react'
import './Entry.css'
import EntryModel from '../../models/Entry';
import Game from '../../models/Game';
import Group from '../../models/Group';
import { connect } from 'react-redux';
import {
  currentEntrySelector,
  entryVisibleSelector,
  entryCompleteSelector,
  isEntryOwnerSelector,
  entryGroupSelector
} from '../../selectors/entries-selector';
import {
  entryGameSelector,
  entryGameStartedSelector
} from '../../selectors/games-selector';
import { entryCategoriesSelector } from '../../selectors/categories-selector';
import {
  entryScoreSelector,
  entryPossibleScoreSelector,
  gameTotalPossibleSelector
} from '../../selectors/categories-selector';
import { Seq } from 'immutable';

import PageHeading from '../pageHeading/PageHeading';
import Category from './category/Category';
import { Link } from 'react-router';

const Entry = ({
  entry,
  game,
  group,
  categories,
  score,
  possible,
  isVisible,
  isOwner,
  isComplete,
  hasStarted,
  totalPossible
}) => {
  return (
    <div>
      <div
        className='Entry--score-progress-bar'
        style={{
          width: `calc(${possible}/${totalPossible} * 100%)`
        }}
      />
      <div
        className='Entry--score-progress-bar entry'
        style={{
          width: `calc(${score}/${totalPossible} * 100%)`
        }}
      />
      <h5 className='Entry--game-name'>{game.name}</h5>
      <div className='Entry--title-container'>
        <PageHeading
          text={entry.name}
        >
          <Link
            to={`/groups/${entry.group}`}
            className={'Entry--group-link'}
          >{group.name}</Link>
        </PageHeading>
        <div className='Entry--score-container'>
        {isComplete || hasStarted ?
            <h3 className='Entry--score'>{`${score}/${possible} points`}</h3>
            :
          <h3 className='Entry--incomplete'>incomplete</h3>}
        </div>
      </div>
      {isVisible ? categories.map((category, i) => {
        return (
          <Category
            key={i}
            category={category}
            entry={entry}
          />
        )
      }) :
        <h5>Entry not visible until game starts</h5>
      }
    </div>
  )
}

Entry.propTypes = {
  entry: PropTypes.instanceOf(EntryModel),
  game: PropTypes.instanceOf(Game),
  group: PropTypes.instanceOf(Group),
  categories: PropTypes.instanceOf(Seq),
  possible: PropTypes.number,
  totalPossible: PropTypes.number,
  score: PropTypes.number,
  isVisible: PropTypes.bool,
  isOwner: PropTypes.bool,
  isComplete: PropTypes.bool,
  hasStarted: PropTypes.bool
}

const mapStateToProps = (state, props) => {
  return {
    entry: currentEntrySelector(state, props),
    game: entryGameSelector(state, props),
    categories: entryCategoriesSelector(state, props),
    score: entryScoreSelector(state, props),
    possible: entryPossibleScoreSelector(state, props),
    isVisible: entryVisibleSelector(state, props),
    isComplete: entryCompleteSelector(state, props),
    isOwner: isEntryOwnerSelector(state, props),
    hasStarted: entryGameStartedSelector(state, props),
    group: entryGroupSelector(state, props),
    totalPossible: gameTotalPossibleSelector(state, props)
  }
}

export default connect(mapStateToProps)(Entry)
