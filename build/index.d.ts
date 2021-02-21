/// <reference types="react" />
/**
 * ColorScale
 *
 * @example: const colors = ["#F00", "#0F0"]
 */
type ColorScaleType = Array<string>;
/**
 * GradientColorScale
 *
 * @example:
 * const colors = [["#F00", "#0F0"], ["#00F", "#F0F"]]
 * const colors = [[, "#F0F"]] //  First value of second gradient by default is #000
 * const colors = [["#00F"]]   // Second value of second gradient by default is #FFF
 */
type GradientColorScaleType = Array<[
    string,
    string
]>;
type DataObjType = {
    value: number;
    label: string;
};
type DataType = Array<DataObjType>;
type ExquisiteDonutChartProps = {
    data: DataType;
    outerRadius?: number;
    innerRadius?: number;
    width?: number;
    height?: number;
    colorScale?: ColorScaleType;
    gradientColorScale?: GradientColorScaleType;
};
declare const ExquisiteDonutChart: ({ data, innerRadius, width, height, gradientColorScale, colorScale }: ExquisiteDonutChartProps) => JSX.Element;
export { ExquisiteDonutChart };
