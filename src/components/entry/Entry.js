import React, { PropTypes } from 'react'
import './Entry.css'
import EntryModel from '../../models/Entry';
import Game from '../../models/Game';
import { connect } from 'react-redux';
import { currentEntrySelector } from '../../selectors/entries-selector';
import { entryGameSelector } from '../../selectors/games-selector';
import { entryCategoriesSelector } from '../../selectors/categories-selector';
import { Seq } from 'immutable';

import PageHeading from '../pageHeading/PageHeading';
import Category from './category/Category';

const Entry = ({
  entry,
  game,
  categories
}) => {
  return (
    <div>
      <PageHeading
        text={entry.name}
      >{game.name}</PageHeading>
      {categories.map((category, i) => {
        return (
          <Category
            key={i}
            category={category}
            entry={entry}
          />
        )
      })}
    </div>
  )
}

Entry.propTypes = {
  entry: PropTypes.instanceOf(EntryModel),
  game: PropTypes.instanceOf(Game),
  categories: PropTypes.instanceOf(Seq)
}

const mapStateToProps = (state, props) => {
  return {
    entry: currentEntrySelector(state, props),
    game: entryGameSelector(state, props),
    categories: entryCategoriesSelector(state, props)
  }
}

export default connect(mapStateToProps)(Entry)
