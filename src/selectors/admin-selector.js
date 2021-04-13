import { createSelector } from "reselect";

const searchResultsSelector = (state) => state.admin.searchResults;

export const peopleResultsSelector = createSelector(
  searchResultsSelector,
  (results) =>
    results.filter(
      (result) =>
        result.get("media_type") === "person" && result.get("profile_path")
    )
);

export const titleResultsSelector = createSelector(
  searchResultsSelector,
  (results) =>
    results.filter(
      (result) =>
        ["movie", "tv"].indexOf(result.get("media_type")) !== -1 &&
        result.get("poster_path")
    )
);
