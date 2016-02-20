import React from 'react';
import ReactDOM from 'react-dom';

import LineChart from './LineChart';

const ScoreDashboard = () => {

  const sampleData = [
    {id: '5fbmzmtc', x: 0, y: 0},
    {id: 's4f8phwm', x: 1, y: 25},
    {id: 'dpoifjpe', x: 2, y: 45},
    {id: 'apoifjpe', x: 3, y: 55},
    {id: 'cpoifjpe', x: 4, y: 55},
    {id: '4fcmzmtc', x: 5, y: 60},
    {id: 'r4j8phwm', x: 6, y: 75},
    {id: 'lplifjpe', x: 7, y: 75},
    {id: 'vppifjpe', x: 8, y: 85},
    {id: 'hpcifjpe', x: 9, y: 95}
  ];

  const sampleData2 = [
    {id: '5fbmzmtc', x: 0, y: 0},
    {id: 's4f8phwm', x: 1, y: 15},
    {id: 'dpoifjpe', x: 2, y: 35},
    {id: 'apoifjpe', x: 3, y: 55},
    {id: 'cpoifjpe', x: 4, y: 65},
    {id: '4fcmzmtc', x: 5, y: 60},
    {id: 'r4j8phwm', x: 6, y: 85},
    {id: 'lplifjpe', x: 7, y: 85},
    {id: 'vppifjpe', x: 8, y: 95},
    {id: 'hpcifjpe', x: 9, y: 95}
  ];

  const domain = {x: [0, 9], y: [0, 100]};

  return (
    <div className='score-dashboard-container'>
      <LineChart
        key={1}
        data={sampleData}
        domain={domain}
        parent={ReactDOM.findDOMNode(this)}
      />
      <LineChart
        key={2}
        data={sampleData2}
        domain={domain}
        parent={ReactDOM.findDOMNode(this)}
      />
    </div>
  );
};

export default ScoreDashboard;
