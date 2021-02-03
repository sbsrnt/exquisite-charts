import tsconfig from './tsconfig.json';

export const resolveEntries = () =>
  Object.entries(tsconfig.compilerOptions.paths).map(([find, [replacement]]) => ({
    find,
    replacement,
  }));

// Build time with or without `onwarn` is almost the same
export const onwarn = (warning, warn) => {
  // d3 circular dependency thread  - https://github.com/d3/d3-selection/issues/168
  const silencedCircularDependencies = ['d3-selection', 'd3-interpolate', 'd3-transition'];

  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    const silencedWarnings = warning.cycle.every((c) =>
      silencedCircularDependencies.some((selectorToSilence) => c.includes(selectorToSilence))
    );

    if (silencedWarnings) return;

    warn(warning);
  }

  warn(warning);
};
