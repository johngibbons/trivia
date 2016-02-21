import React from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

import {LineChart} from 'react-d3-components';

const ScoreDashboard = () => {

  const sampleData = [
    {x: 0, y: 0},
    {x: 1, y: 25},
    {x: 2, y: 45},
    {x: 3, y: 55},
    {x: 4, y: 55},
    {x: 5, y: 60},
    {x: 6, y: 75},
    {x: 7, y: 75},
    {x: 8, y: 85},
    {x: 9, y: 95}
  ];

  const sampleData2 = [
    {x: 0, y: 0},
    {x: 1, y: 15},
    {x: 2, y: 35},
    {x: 3, y: 55},
    {x: 4, y: 65},
    {x: 5, y: 60},
    {x: 6, y: 85},
    {x: 7, y: 85},
    {x: 8, y: 95},
    {x: 9, y: 95}
  ];

  let data = [
    {
      label: 'somethingA',
      values: sampleData
    },
    {
      label: 'somethingB',
      values: sampleData2
    }
  ];

  const domain = {x: [0, 9], y: [0, 100]};
  const margin = {top: 20, right: 20, bottom: 30, left: 40};
  const colorScale = d3.scale.category20c();

  return (
    <div className='score-dashboard-container'>
      <LineChart
        key={1}
        data={data}
        height={290}
        width={900}
        margin={margin}
        colorScale={colorScale}
      />
    </div>
  );
};

export default ScoreDashboard;
