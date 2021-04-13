import React, { PropTypes } from "react";
import { browserHistory } from "react-router";
import "./Navbar.css";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LoginButton from "./loginButton/LoginButton";
import AccountDropdown from "./accountDropdown/AccountDropdown";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    cursor: "pointer",
    color: "#212121",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "uppercase",
    marginLeft: "24px",
  },
});

const Navbar = ({ loggedIn }) => {
  const classes = useStyles();

  return (
    <AppBar
      className="Navbar"
      style={{
        padding: 0,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => browserHistory.push("/")}
        >
          trvia
        </Typography>
        <div
          style={{
            marginTop: 0,
            marginRight: "12px",
          }}
        >
          {loggedIn ? <AccountDropdown /> : <LoginButton />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  loggedIn: PropTypes.bool,
};

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: !!currentUser.email,
  };
};

export default connect(mapStateToProps)(Navbar);
