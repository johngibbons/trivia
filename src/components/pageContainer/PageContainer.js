import React, { PropTypes } from "react";
import "./PageContainer.css";

import Navbar from "../navbar/Navbar.js";
import AlertBar from "../alertBar/AlertBar.js";

const PageContainer = ({ children }) => {
  return (
    <div className="PageContainer">
      <Navbar />
      <div className="PageContainer-body">{children}</div>
      <AlertBar />
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
