import React, { PropTypes } from "react";
import "./AccountDropdown.css";
import { connect } from "react-redux";
import { Record } from "immutable";
import { signOut } from "../../../actions/user-actions";
import { push } from "react-router-redux";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import UserAvatar from "../../users/userAvatar/UserAvatar";
import Button from "@material-ui/core/Button";

const AccountDropdown = ({ currentUser, onClickSignOut, onClickMyGroups }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="AccountDropdown-icon"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <UserAvatar user={currentUser} />
      </Button>
      <Menu
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        targetOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            onClickMyGroups(currentUser.id);
            handleClose();
          }}
        >
          My Entries
        </MenuItem>
        <MenuItem
          onClick={() => {
            onClickSignOut();
            handleClose();
          }}
        >
          Sign out
        </MenuItem>
      </Menu>
    </div>
  );
};

AccountDropdown.propTypes = {
  currentUser: PropTypes.instanceOf(Record),
  onClickSignOut: PropTypes.func.isRequired,
  onClickMyGroups: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, {
  onClickSignOut: signOut,
  onClickMyGroups: (id) => push(`/users/${id}/entries`),
})(AccountDropdown);
