import React, { PropTypes } from "react";
import "./NomineesGrid.css";

import { Seq } from "immutable";

import Nominee from "./nominee/Nominee";
const NomineesGrid = ({
  nominees,
  selectedNomineeId,
  correctNomineeId,
  isIncorrect,
}) => {
  const nomineeEl = (nominee, i) => (
    <Nominee
      key={nominee.id || i}
      nominee={nominee}
      selectedNomineeId={selectedNomineeId}
      correctId={correctNomineeId}
    />
  );

  const selectableNominees = nominees.map(nomineeEl);

  const selectedNominee = nominees.filter(
    (nominee, i) => nominee.id === selectedNomineeId
  );
  const correctNominee = nominees.filter(
    (nominee, i) => nominee.id === correctNomineeId
  );

  const unselectableNominees =
    selectedNomineeId === correctNomineeId
      ? correctNominee.map(nomineeEl)
      : [...selectedNominee, ...correctNominee].map(nomineeEl);

  return (
    <div className="NomineesGrid">
      <div className="NomineesGrid--list">
        {correctNomineeId ? unselectableNominees : selectableNominees}
      </div>
    </div>
  );
};

NomineesGrid.propTypes = {
  nominees: PropTypes.instanceOf(Seq),
  selectedNomineeId: PropTypes.string,
  correctNomineeId: PropTypes.string,
};

export default NomineesGrid;
