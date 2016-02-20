import React from 'react';
import d3LineChart from '../d3/d3LineChart';

class LineChart extends React.Component {

  componentDidMount() {
    d3LineChart.create(this.props.parent, {
      width: '100%',
      height: '18rem'
    }, this.getChartState());
  }

  componentDidUpdate() {
    d3LineChart.update(this.props.parent, this.getChartState());
  }

  getChartState() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  }

  componentWillUnmount() {
    d3LineChart.destroy(this.props.parent);
  }

  render() {
    return (
      <span className='line-chart' />
    );
  }
}

export default LineChart;
