
import path from 'path';

export default {
  debug: true, // debug info
  devtool: 'inline-source-map', // the sourcemap for unbundling/ unminifying (quality vs speed)
  noInfo: false, // setting to false mean webpack will display a list of files its compiling
  entry: [
    path.resolve(__dirname, 'src/index') // entry point of application (ignoring hot reloading)
  ],
  target: 'web', // can target to node to get app running with node (electron - desktop style apps)
  output: {  // where to create bundle in memeory to serve to the browser (doesnt acutally write any files)
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js' // bundle is called bundle.js
  },
  plugins: [], // (hot reloading, hinting styles, and much more)
  module: {
    loaders: [  // file types we want the bundler to handle. We want to handle js, css, html, sass, images ets.
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
