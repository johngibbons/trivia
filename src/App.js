import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Root from './Root';
import store from './store'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#b7a261',
    textColor: '#212121',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell","Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
  }
});

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Root store={store} history={history} />
    </MuiThemeProvider>
  )
}

export default App
