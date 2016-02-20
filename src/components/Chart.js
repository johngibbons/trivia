import React from 'react';

const Chart = ({
  children,
  width,
  height,
  margin,
  viewBox,
  preserveAspectRatio
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>{children}</g>
    </svg>
  );
};

export default Chart;
