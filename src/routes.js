import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './components/home/Home';
import Game from './components/game/Game';
import NoMatch from './components/noMatch/NoMatch';
import PageContainer from './components/pageContainer/PageContainer';
import PendingGame from './components/pendingGame/PendingGame';

export default (
  <Route path="/" component={PageContainer}>
    <IndexRoute component={Home} />
    <Route path='games/new' component={PendingGame} />
    <Route path='games/:id' component={Game} />
    <Route path="*" component={NoMatch} />
  </Route>
)
