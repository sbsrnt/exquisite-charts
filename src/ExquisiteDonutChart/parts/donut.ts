import { pie as d3pie } from 'd3';

import { D3PieType, DataObjType, DataType } from '#types';

export const createDonut: D3PieType = (data) => {
  const pie = d3pie<DataObjType>()
    .value((d) => d.value)
    .sort(null);

  return pie(data);
};
