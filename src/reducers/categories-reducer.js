import {
  SAVE_PENDING_CATEGORY,
  SET_CATEGORIES,
  SET_CATEGORY,
  TOGGLE_CORRECT_NOMINEE,
} from "../actions/action-types";
import { Map, fromJS } from "immutable";
import Category from "../models/Category";

const categories = (state = new Map(), action) => {
  switch (action.type) {
    case SAVE_PENDING_CATEGORY: {
      const { pendingCategory } = action.payload;
      const newState = state.set(
        pendingCategory.id,
        new Category({
          id: pendingCategory.id,
          nominees: pendingCategory.nominees.map(() => true),
        })
      );
      return newState;
    }
    case SET_CATEGORIES: {
      const { categories } = action.payload;
      fromJS(categories, (k, v) => {
        return k !== "nominees" && k !== "" ? new Category(v) : v;
      });
      return state.merge(
        fromJS(categories, (k, v) => {
          return k !== "nominees" && k !== "" ? new Category(v) : v;
        })
      );
    }
    case SET_CATEGORY: {
      const { category } = action.payload;
      return state.set(
        category.id,
        new Category({
          ...category,
          nominees: new Map(category.nominees),
        })
      );
    }
    case TOGGLE_CORRECT_NOMINEE: {
      const { nominee } = action.payload;
      if (state.getIn([nominee.category, "correctAnswer"]) === nominee.id) {
        return state.deleteIn([nominee.category, "correctAnswer"]);
      } else {
        return state.setIn([nominee.category, "correctAnswer"], nominee.id);
      }
    }
    default:
      return state;
  }
};

export default categories;
