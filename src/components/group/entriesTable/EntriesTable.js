import React, { PropTypes } from "react";
import "./EntriesTable.css";
import { List, Seq } from "immutable";
import WarningIcon from "@material-ui/icons/Warning";
import CheckIcon from "@material-ui/icons/CheckCircle";

import EntryRow from "./entryRow/EntryRow";

const EntriesTable = ({ entries, categories, gameStarted }) => {
  return (
    <div className="EntriesTable">
      {!gameStarted && (
        <div className="EntriesTable--legend">
          <span className="EntriesTable--legend-icon EntriesTable--legend-icon-complete">
            <CheckIcon
              className="EntriesTable__status-icon"
              height="20px"
              width="20px"
              color="#689F38"
            />
            Complete
          </span>
          <span className="EntriesTable--legend-icon EntriesTable--legend-icon-incomplete">
            <WarningIcon
              className="EntriesTable__status-icon"
              height="20px"
              width="20px"
              color="#D32F2F"
            />
            Incomplete
          </span>
        </div>
      )}
      <table className="EntriesTable--table">
        <thead className="EntriesTable--table-header">
          <tr className="EntriesTable--table-header-row">
            <th className="EntriesTable--headerCol EntriesTable--headerCol-rank" />
            <th className="EntriesTable--headerCol EntriesTable--headerCol-avatar" />
            <th className="EntriesTable--headerCol EntriesTable--headerCol-entry-name">
              Entry Name
            </th>
            <th className="EntriesTable--headerCol EntriesTable--headerCol-score">
              Score
            </th>
            {gameStarted &&
              categories
                .toList()
                .toJS()
                .map((category) => {
                  return (
                    <th
                      key={category.id}
                      className="EntriesTable--headerCol EntriesTable--headerCol-diagonal"
                    >
                      {category.name}
                    </th>
                  );
                })}
          </tr>
        </thead>
        <tbody className="EntriesTable--table-body">
          {entries.toJS().map((entry, i) => {
            return (
              <EntryRow
                key={entry.id || i}
                entry={entry}
                categories={categories}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

EntriesTable.propTypes = {
  entries: PropTypes.instanceOf(List),
  categories: PropTypes.instanceOf(Seq),
  gameStarted: PropTypes.bool,
};

export default EntriesTable;
