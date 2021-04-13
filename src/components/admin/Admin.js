import React, { PropTypes } from "react";
import "./Admin.css";

const Admin = ({ children }) => {
  return <div className="Admin">{children}</div>;
};

Admin.propTypes = {
  children: PropTypes.node,
};

export default Admin;
