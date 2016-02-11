import React from 'react';
import ReactDOM from 'react-dom';
import d3LineChart from '../d3/d3LineChart';

class LineChart extends React.Component {

  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    d3LineChart.create(el, {
      width: '100%',
      height: '18rem'
    }, this.getChartState());
  }

  componentDidUpdate() {
    const el = ReactDOM.findDOMNode(this);
    d3LineChart.update(el, this.getChartState());
  }

  getChartState() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  }

  componentWillUnmount() {
    const el = ReactDOM.findDOMNode(this);
    d3LineChart.destroy(el);
  }

  render() {
    return (<div className='line-chart' />);
  }
}

export default LineChart;
