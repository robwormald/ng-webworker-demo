const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
const path = require('path');

module.exports = {
	entry: './lib/src/main.worker.js',
	output: {
		path: path.resolve('public'),
		filename: 'app.worker.js'
	},
	module: {
		rules: [
		  {
			test: /\.js$/,
			loader: '@angular-devkit/build-optimizer/webpack-loader',
			options: {
			  sourceMap: false
			}
		  }
		]
	  },
	  plugins: [
		new PurifyPlugin()
	  ]
}
