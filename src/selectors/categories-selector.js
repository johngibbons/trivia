import Category from "../models/Category";
import Group from "../models/Group";
import { createSelector } from "reselect";
import { currentGameSelector, entryGameSelector } from "./games-selector.js";
import { currentEntrySelector } from "./entries-selector";
import { Seq } from "immutable";

export const givenCategorySelector = (state, props) => props.category;

const categoriesSelector = (state) => state.categories;
const groupsSelector = (state) => state.groups;
const groupFromPropsSelector = (state, props) => props.group;
const groupFromParamsSelector = (state, props) =>
  state.groups.get(props.routeParams.id);

export const currentCategorySelector = (state, props) =>
  state.categories.get(props.category.id);

export const currentCategoriesSelector = createSelector(
  currentGameSelector,
  categoriesSelector,
  (game, categories) =>
    game &&
    game.categories
      .keySeq()
      .map((id) => categories.get(id))
      .sort((catA, catB) => catA.presentationOrder - catB.presentationOrder)
);

export const entryCategoriesSelector = createSelector(
  entryGameSelector,
  categoriesSelector,
  (game, categories) => {
    return (
      game &&
      game.categories
        .keySeq()
        .map((id) => categories.get(id) || new Category())
        .sort((c1, c2) => c1.presentationOrder - c2.presentationOrder)
    );
  }
);

const entryGroupSelector = createSelector(
  currentEntrySelector,
  groupsSelector,
  (entry, groups) => groups.get(entry.group)
);

export const entryScoreSelector = createSelector(
  entryCategoriesSelector,
  currentEntrySelector,
  entryGroupSelector,
  (categories, entry, group) => {
    return categories.reduce(
      (acc, category) =>
        category.correctAnswer &&
        category.correctAnswer === entry.selections.get(category.id)
          ? acc + group.values.get(category.id)
          : acc,
      0
    );
  }
);

export const entryPossibleScoreSelector = createSelector(
  entryCategoriesSelector,
  entryGroupSelector,
  (categories, group) => {
    return categories
      .filter((category) => category.correctAnswer)
      .reduce((acc, category) => acc + group.values.get(category.id), 0);
  }
);

export const gameTotalPossibleSelector = createSelector(
  entryGroupSelector,
  (group) =>
    group ? group.values.reduce((acc, value) => acc + value, 0) : new Group()
);

export const groupCategoriesSelector = createSelector(
  groupFromPropsSelector,
  categoriesSelector,
  (group, categories) => {
    return group.values.toKeyedSeq().map((val, key) => {
      return categories.get(key).set("value", val);
    });
  }
);

export const currentGroupCategoriesSelector = createSelector(
  groupFromParamsSelector,
  categoriesSelector,
  (group, categories) => {
    return group
      ? group.values
          .toKeyedSeq()
          .map((val, key) => {
            const category = categories.get(key);
            console.log("category", category);
            return categories.get(key).set("value", val);
          })
          .sort((catA, catB) => catA.presentationOrder - catB.presentationOrder)
      : new Seq();
  }
);
