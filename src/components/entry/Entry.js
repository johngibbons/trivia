import React, { PropTypes } from 'react'
import './Entry.css'
import EntryModel from '../../models/Entry';
import Game from '../../models/Game';
import { connect } from 'react-redux';
import {
  currentEntrySelector,
  entryVisibleSelector,
  entryCompleteSelector
} from '../../selectors/entries-selector';
import { entryGameSelector } from '../../selectors/games-selector';
import { entryCategoriesSelector } from '../../selectors/categories-selector';
import { entryScoreSelector } from '../../selectors/categories-selector';
import { Seq } from 'immutable';

import PageHeading from '../pageHeading/PageHeading';
import Category from './category/Category';

const Entry = ({
  entry,
  game,
  categories,
  score,
  isVisible,
  isComplete
}) => {
  return (
    <div>
      <h5 className='Entry--game-name'>{game.name}</h5>
      <div className='Entry--title-container'>
        <PageHeading
          text={entry.name}
        >
        {isComplete ?
          <h3 className='Entry--score'>{score} points</h3>
            :
          <h3 className='Entry--incomplete'>incomplete</h3>}
        </PageHeading>
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
  categories: PropTypes.instanceOf(Seq),
  score: PropTypes.number,
  isVisible: PropTypes.bool,
  isComplete: PropTypes.bool
}

const mapStateToProps = (state, props) => {
  return {
    entry: currentEntrySelector(state, props),
    game: entryGameSelector(state, props),
    categories: entryCategoriesSelector(state, props),
    score: entryScoreSelector(state, props),
    isVisible: entryVisibleSelector(state, props),
    isComplete: entryCompleteSelector(state, props)
  }
}

export default connect(mapStateToProps)(Entry)
