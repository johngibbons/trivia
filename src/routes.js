import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './components/home/Home';
import Game from './components/game/Game';
import NoMatch from './components/noMatch/NoMatch';
import PageContainer from './components/pageContainer/PageContainer';
import EditGame from './components/editGame/EditGame';
import Admin from './components/admin/Admin';

export default (
  <Route path="/" component={PageContainer}>
    <IndexRoute component={Home} />
    <Route path='games/:id/edit' component={EditGame} />
    <Route path='games/:id' component={Game} />
    <Route path='admin' component={Admin} />
    <Route path="*" component={NoMatch} />
  </Route>
)
