var webpack = require('webpack');
module.exports = {

  // tells webpack where the entry file is
  entry: [
    'webpack/hot/only-dev-server',
    "./js/app.js"
  ],

  // tells webpack where the bundled files should go when our app is built
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },

  // add and remove loaders based on what we need webpack to bundle for us
  module: {
    loaders: [
      // react-hot and babel allow us to use ES6 while hot loading
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" }
    ]
  },

  // different types of webpack plugins
  plugins: [
    // hot loader would not automatically reload if there are errors in the code
    new webpack.NoErrorsPlugin()
  ]
};
