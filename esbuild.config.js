import esbuildServe from 'esbuild-serve'
import {getBigData} from './src/prepare.js'
const bigData = getBigData()

esbuildServe({
  entryPoints: ['src/app.jsx'],
  define: { BIGDATA: JSON.stringify(bigData) },
  bundle: true,
  minify: true,
  outfile: 'dist/index.js',
}, {
  port: 3000,
  root: 'dist',
})
