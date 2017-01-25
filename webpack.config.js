const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'www'),
};

process.env.BABEL_ENV = ENV;

const common = {
  entry: ['whatwg-fetch', PATHS.src],
  output: { path: PATHS.build, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?url=false&modules&importLoaders=1&localIdentName=[emoji]',
        ],
        include: PATHS.src,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.src,
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.svg/, loader: 'svg-url-loader?limit=1024' },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ],
  performance: {
    maxAssetSize: 100000,
    maxEntrypointSize: 200000,
    hints: 'warning',
  },
};

if (ENV === 'development') {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      // Display only errors to reduce the amount of output.
      stats: 'errors-only',
      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
  });
} else {
  // config can be added here for minifying / etc
  module.exports = merge(common, {
    devtool: false,
    plugins: [
      new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        comments: false,
        sourceMap: false,
      }),
    ],
  });
}
