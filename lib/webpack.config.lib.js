const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: { lib: [path.resolve(__dirname, 'src/lib')] },
	output: {
		path: path.resolve(__dirname, './dist/lib'),
		filename: 'index.js',
		library: '[name]',
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.ts', '.tsx', '.js'],
	},
	devServer: {
		writeToDisk: true,
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: './build/library/[name].json',
		}),
	],
};
