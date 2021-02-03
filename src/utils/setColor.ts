import { ColorScaleType, GradientColorScaleType } from '#types';

const POSITION = {
  First: 'first',
  Second: 'second',
};

type ColorTypes = {
  i: number;
  position: typeof POSITION.First | typeof POSITION.Second;
  gradientColorScale?: GradientColorScaleType;
  colorScale?: ColorScaleType;
};

export const setColor: (data: ColorTypes) => string = ({
  i,
  position,
  gradientColorScale,
  colorScale,
}) => {
  const defaultFirstColor = '#000';
  const defaultSecondColor = '#FFF';

  if (!!colorScale && colorScale[i]) {
    return colorScale[i];
  }

  if (!!gradientColorScale && gradientColorScale[i]) {
    const [firstColor, secondColor] = gradientColorScale[i];

    switch (position) {
      case POSITION.First:
        return firstColor || defaultFirstColor;
      case POSITION.Second:
        return secondColor || defaultSecondColor;
    }
  }

  switch (position) {
    case POSITION.First:
      return defaultFirstColor;
    case POSITION.Second:
      return defaultSecondColor;
  }
};
