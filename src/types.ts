import { ReactNode } from 'react';
import * as d3 from 'd3';

export type ExquisiteChartComponent<T = undefined> = (props: T) => ReactNode;

/**
 * ColorScale
 *
 * @example: const colors = ["#F00", "#0F0"]
 */
export type ColorScaleType = Array<string>;

/**
 * GradientColorScale
 *
 * @example:
 * const colors = [["#F00", "#0F0"], ["#00F", "#F0F"]]
 * const colors = [[, "#F0F"]] //  First value of second gradient by default is #000
 * const colors = [["#00F"]]   // Second value of second gradient by default is #FFF
 */
export type GradientColorScaleType = Array<[string, string]>;

export type DataObjType = { value: number; label: string };

export type DataType = Array<DataObjType>;

export type DataReadyChart = d3.Selection<null, null, d3.BaseType, DataType>;

export type PieDataReady = Array<d3.PieArcDatum<DataObjType>>;

/**
 * D3
 */
export type D3PieType = (data: DataType) => PieDataReady;

export type D3ArcType<T> = (data: T) => d3.Arc<never, any>;

export type D3SvgType = d3.Selection<d3.BaseType, DataType, d3.BaseType, DataType>;

export type D3Selection<T> = (data: T) => d3.Selection<d3.BaseType, unknown, d3.BaseType, unknown>;

export type D3TransitionType<T> = (
  data: T
) => d3.Transition<SVGTextElement, unknown, d3.BaseType, DataType>;
