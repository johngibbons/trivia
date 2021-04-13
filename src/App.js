import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Root from "./Root";
import store from "./store";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

const history = syncHistoryWithStore(browserHistory, store);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b7a261",
    },
    text: {
      primary: "#424242",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root store={store} history={history} />
    </ThemeProvider>
  );
};

export default App;
