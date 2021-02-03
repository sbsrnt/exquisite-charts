import { select as d3select } from 'd3';

import { ColorScaleType, D3Selection, GradientColorScaleType, PieDataReady } from '#types';

import { setColor } from './setColor';

type CreateRadialGradientProps = {
  selector: string;
  dataReadyChart: PieDataReady;
  gradientColorScale?: GradientColorScaleType;
  colorScale?: ColorScaleType;
  innerRadius?: number;
  outerRadius?: number;
};

export const createRadialGradient: D3Selection<CreateRadialGradientProps> = ({
  selector,
  dataReadyChart,
  gradientColorScale,
  colorScale,
  innerRadius,
  outerRadius,
}) => {
  const defs = d3select(selector).append('defs');
  const initOffset = () => {
    const radiusQuotient = (innerRadius / outerRadius) * 100;

    if (innerRadius === 0 || outerRadius === 0) return '0%';

    if (radiusQuotient < 30) return '0%';

    if (radiusQuotient > 80 && radiusQuotient < 95) return '75%';

    if (radiusQuotient >= 95) return '85%';

    return `${radiusQuotient}%`;
  };

  const gradients = defs
    .selectAll(`${selector} radialGradient`)
    .data(dataReadyChart, (_, i) => i)
    .join('radialGradient')
    .attr('id', (_, i) => i)
    .attr('cx', '0%')
    .attr('cy', '0%')
    .attr('r', '50%')
    .attr('fx', '0%')
    .attr('fy', '0%')
    .attr('spreadMethod', 'pad')
    .attr('gradientUnits', 'userSpaceOnUse');

  gradients
    .append('stop')
    .attr('offset', initOffset())
    .attr('stop-color', (_, i) =>
      setColor({ i, position: 'first', gradientColorScale, colorScale })
    );

  gradients
    .append('stop')
    .attr('offset', '100%')
    .attr('stop-color', (_, i) =>
      setColor({ i, position: 'second', gradientColorScale, colorScale })
    );

  return gradients;
};
