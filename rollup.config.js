import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@wessberg/rollup-plugin-ts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json';
import { onwarn, resolveEntries } from './rollup.utils';

export default {
  onwarn,
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    ts({ tsconfig: './tsconfig.json' }),
    alias({
      resolve: ['.ts', '.tsx'],
      entries: resolveEntries(),
    }),
    resolve(),
    commonjs(),
  ],
};
