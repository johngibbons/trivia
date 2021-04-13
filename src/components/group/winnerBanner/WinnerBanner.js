import React, { PropTypes } from "react";
import "./WinnerBanner.css";
import { List } from "immutable";
import UserAvatar from "../../users/userAvatar/UserAvatar";

const WinnerBanner = ({ winningEntries }) => {
  return (
    <div>
      <div id="WinnerBanner" className="WinnerBanner">
        <div className="WinnerBanner--title">
          {winningEntries.size > 1
            ? "Contratulations Oscar Champions!"
            : "Congratulations Oscar Champion!"}
        </div>
        {winningEntries.map((entry, i) => {
          return (
            <div key={i} className="WinnerBanner--winner">
              <UserAvatar
                className="WinnerBanner--winner-avatar"
                user={entry.user}
              />
              <div className="WinnerBanner--winner-entry-name">
                {entry.name}
              </div>
              <div className="WinnerBanner--winner-user-name">
                {entry.user.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

WinnerBanner.propTypes = {
  winningEntries: PropTypes.instanceOf(List),
};

export default WinnerBanner;
