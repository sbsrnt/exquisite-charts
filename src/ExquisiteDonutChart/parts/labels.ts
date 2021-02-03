import { format, interpolate, select } from 'd3';

import { D3SvgType, D3TransitionType, DataType, PieDataReady } from '#types';

import { createArc } from './arcs';

type LabelsType = {
  svg: D3SvgType;
  dataReadyChart: PieDataReady;
  data: DataType;
  innerRadius?: number;
  outerRadius?: number;
};

export const createLabels: D3TransitionType<LabelsType> = ({
  svg,
  dataReadyChart,
  data,
  innerRadius,
  outerRadius,
}) => {
  const textFormat = format('.2f');
  const arc = createArc({ innerRadius, outerRadius });

  return svg
    .selectAll()
    .data(dataReadyChart)
    .enter()
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('fill', 'white')
    .style('font-size', 20)
    .style('text-shadow', '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000')
    .style('font-weight', 'bold')
    .style('font-family', 'Arial')
    .transition()
    .attr('transform', (d) => `translate(${arc.centroid(d)})`)
    .tween('text', (d, i, nodes) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const interpolator = interpolate<any>(data[i], d);

      return (t) => select(nodes[i]).text(textFormat(interpolator(t).value));
    });
};
