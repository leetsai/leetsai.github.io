var webpack = require('webpack');
module.exports = {
  // tells webpack where the entry file is
  entry: [
    'webpack/hot/only-dev-server',
    "./js/app.js"
  ],

  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
