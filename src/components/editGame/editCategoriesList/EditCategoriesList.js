import React, { PropTypes } from "react";
import "./EditCategoriesList.css";

import { Seq } from "immutable";

import EditCategory from "./editCategory/EditCategory";

const EditCategoriesList = ({ categories }) => {
  return (
    <div className="EditCategoriesList">
      {categories.map((category, i) => (
        <EditCategory key={i} category={category} index={i} />
      ))}
    </div>
  );
};

EditCategoriesList.propTypes = {
  categories: PropTypes.instanceOf(Seq),
};

export default EditCategoriesList;
