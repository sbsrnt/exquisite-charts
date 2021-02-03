import React, { useEffect, useRef } from 'react';
import { select as d3select } from 'd3';

import {
  ColorScaleType,
  D3SvgType,
  DataType,
  ExquisiteChartComponent,
  GradientColorScaleType,
} from '#types';
import { createRadialGradient } from '#utils/createRadialGradient';

import { createArcs, createBorderArcs, createDonut, createLabels } from './parts';

type ExquisiteDonutChartProps = {
  data: DataType;
  outerRadius?: number;
  innerRadius?: number;
  width?: number;
  height?: number;
  colorScale?: ColorScaleType;
  gradientColorScale?: GradientColorScaleType;
};

const ExquisiteDonutChart: ExquisiteChartComponent = ({
  data,
  innerRadius = 80,
  width = 400,
  height = 400,
  gradientColorScale,
  colorScale,
}: ExquisiteDonutChartProps) => {
  if (!data) return null;

  const ref = useRef(null);
  const widthRadius = width / 2;
  const heightRadius = height / 2;
  const outerRadius = widthRadius - 20;

  useEffect(() => {
    const dataReadyChart = createDonut(data);
    const svg: D3SvgType = d3select(ref.current);

    createRadialGradient({
      selector: '#pie',
      dataReadyChart,
      gradientColorScale,
      colorScale,
      innerRadius,
      outerRadius,
    });
    createBorderArcs({
      svg,
      dataReadyChart,
      innerRadius,
      outerRadius,
      gradientColorScale,
      colorScale,
    });
    createArcs({ svg, dataReadyChart, innerRadius, outerRadius });
    createLabels({ svg, dataReadyChart, data, innerRadius, outerRadius });
  }, [data]);

  return (
    <svg width={width} height={height} id="pie">
      <g ref={ref} transform={`translate(${widthRadius} ${heightRadius})`} />
    </svg>
  );
};

export default ExquisiteDonutChart;
