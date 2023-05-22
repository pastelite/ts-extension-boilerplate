// rollup.config.js

import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';

import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import del from "rollup-plugin-delete"

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    // always put chromeExtension() before other plugins
    chromeExtension(),
    simpleReloader(),
    // the plugins below are optional
    typescript(),
    resolve(),
    commonjs(),
  ],
}