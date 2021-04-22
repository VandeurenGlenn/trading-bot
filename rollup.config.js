import json from '@rollup/plugin-json'
export default [{
  input: 'src/index.js',
  output: [{
    dir: './dist',
    format: 'cjs'
  }]
}, {
  input: 'src/cli.js',
  output: {
    dir: './bin',
		format: 'cjs',
    banner: '#!/usr/bin/env node'
	},
	plugins: [
		json()
	]
}]
