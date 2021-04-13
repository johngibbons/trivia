import React, { PropTypes } from "react";
import "./Home.css";
import { connect } from "react-redux";
import { Set } from "immutable";
import User from "../../models/User";
import { CURRENT_TITLE } from "../../constants";

import { openModal } from "../../actions/ui-actions";

import Button from "@material-ui/core/Button";
import NewGroupModal from "../group/newGroupModal/NewGroupModal";
import { gameNomineesSelector } from "../../selectors/nominees-selector";
import { browserHistory } from "react-router";

const Home = ({ currentUser, nominees, onClickNewGroup }) => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h1 className="Home-awards-title">{CURRENT_TITLE}</h1>
        <h2 className="Home-main-title">
          Pick the <span className="Home-gold-text">winners</span>. Beat your
          friends.
        </h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            currentUser.id
              ? onClickNewGroup("NEW_GROUP")
              : browserHistory.push("/login");
          }}
        >
          Start a group
        </Button>
      </div>
      <div className="Home-movie-carousel">
        <div className="Home-movie-images">
          {nominees.map((nominee) => {
            return (
              <div
                key={nominee.get("id")}
                className="Home-nominee-poster"
                style={{
                  backgroundImage: `url(${nominee.get("imageUrl")})`,
                }}
              />
            );
          })}
        </div>
      </div>
      <NewGroupModal />
    </div>
  );
};

Home.propTypes = {
  currentUser: PropTypes.instanceOf(User),
  nominees: PropTypes.instanceOf(Set),
  onClickNewGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    nominees: gameNomineesSelector(state),
  };
};

export default connect(mapStateToProps, {
  onClickNewGroup: openModal,
})(Home);
