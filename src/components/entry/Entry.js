import React, { PropTypes } from 'react'
import './Entry.css'
import EntryModel from '../../models/Entry';
import Game from '../../models/Game';
import { connect } from 'react-redux';
import {
  currentEntrySelector,
  entryVisibleSelector
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
  isVisible
}) => {
  return (
    <div>
      <PageHeading
        text={entry.name}
      >{game.name}</PageHeading>
      <h3>{score}</h3>
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
  isVisible: PropTypes.bool
}

const mapStateToProps = (state, props) => {
  return {
    entry: currentEntrySelector(state, props),
    game: entryGameSelector(state, props),
    categories: entryCategoriesSelector(state, props),
    score: entryScoreSelector(state, props),
    isVisible: entryVisibleSelector(state, props)
  }
}

export default connect(mapStateToProps)(Entry)
