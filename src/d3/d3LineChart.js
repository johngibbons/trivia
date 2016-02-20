import d3 from 'd3';

const d3Chart = {};

d3Chart.create = function(el, props, state) {
  let svg = d3
    .select(el)
    .append('svg')
    .attr('class', 'd3')
    .attr('width', props.width)
    .attr('height', props.height);

  svg.append('g')
    .append('path')
    .attr('class', 'd3-path');

  svg.append('g')
    .attr('class', 'd3-points');

  this.update(el, state);
};

d3Chart.update = function(el, state) {
  let scales = this.scales(el, state.domain);
  this.drawLine(el, scales, state.data);
  this.drawPoints(el, scales, state.data);
};

d3Chart.destroy = function(el) {};

d3Chart.drawPoints = function(el, scales, data) {
  let g = d3.select(el).selectAll('.d3-points');

  let point = g.selectAll('.d3-point')
    .data(data, (d) => d.id);

  point.enter().append('circle')
    .attr('class', 'd3-point');

  point.attr('cx', (d) => scales.x(d.x))
    .attr('cy', (d) => scales.y(d.y))
    .attr('r', (d) => 5);

  point.exit().remove();
};

d3Chart.drawLine = function(el, scales, data) {

  let area = d3.svg.area()
    .x(d => scales.x(d.x))
    .y0(d => scales.y(0))
    .y1(d => scales.y(d.y));

  let g = d3.select(el).select('.d3-path')
    .datum(data)
    .transition()
    .duration(500)
    .attr('d', area);
};

d3Chart.scales = function(el, domain) {
  if (!domain) {
    return null;
  }

  var width = el.offsetWidth;
  var height = el.offsetHeight;

  var x = d3.scale.linear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scale.linear()
    .range([height, 0])
    .domain(domain.y);

  return {x: x, y: y};
};

export default d3Chart;
