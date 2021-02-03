import { arc as d3arc } from 'd3';

import {
  ColorScaleType,
  D3ArcType,
  D3Selection,
  D3SvgType,
  GradientColorScaleType,
  PieDataReady,
} from '#types';
import { setColor } from '#utils/setColor';

type CreateArcTypes = {
  innerRadius?: number;
  outerRadius?: number;
};

type CreateArcsTypes = {
  svg: D3SvgType;
  dataReadyChart: PieDataReady;
  innerRadius: CreateArcTypes['innerRadius'];
  outerRadius: CreateArcTypes['outerRadius'];
};

type CreateBorderArcsTypes = {
  svg: D3SvgType;
  dataReadyChart: PieDataReady;
  innerRadius: CreateArcTypes['innerRadius'];
  outerRadius: CreateArcTypes['outerRadius'];
  gradientColorScale: GradientColorScaleType;
  colorScale: ColorScaleType;
};

export const createArc: D3ArcType<CreateArcTypes> = ({ innerRadius, outerRadius }) =>
  d3arc().innerRadius(innerRadius).outerRadius(outerRadius);

export const createArcs: D3Selection<CreateArcsTypes> = ({
  svg,
  dataReadyChart,
  innerRadius,
  outerRadius,
}) =>
  svg
    .selectAll()
    .data(dataReadyChart)
    .enter()
    .append('path')
    .attr('d', createArc({ innerRadius, outerRadius }))
    .attr('class', 'arc')
    .attr('fill', (_, i) => `url(#${i})`)
    .attr('stroke', '#FFF')
    .style('stroke-width', '2px');

export const createBorderArcs: D3Selection<CreateBorderArcsTypes> = ({
  svg,
  dataReadyChart,
  innerRadius,
  outerRadius,
  gradientColorScale,
  colorScale,
}) =>
  svg
    .selectAll()
    .data(dataReadyChart)
    .enter()
    .append('path')
    .attr('d', createArc({ innerRadius: innerRadius, outerRadius: outerRadius + 20 }))
    .attr('class', 'phantom-arc')
    .attr(
      'fill',
      (_, i) => `${setColor({ i, position: 'second', gradientColorScale, colorScale })}`
    )
    .attr('fill-opacity', 0.5)
    .attr('stroke', '#FFF')
    .style('stroke-width', '2px');
