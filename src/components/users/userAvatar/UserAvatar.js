import React, { PropTypes } from "react";
import "./UserAvatar.css";
import { gravatar } from "../../../helpers/user-helper";
import User from "../../../models/User";

import Avatar from "@material-ui/core/Avatar";

const UserAvatar = ({ user, className }) => {
  return (
    <Avatar src={user.photoURL || gravatar(user.email)} className={className} />
  );
};

UserAvatar.propTypes = {
  user: PropTypes.instanceOf(User),
  className: PropTypes.string,
};

export default UserAvatar;
