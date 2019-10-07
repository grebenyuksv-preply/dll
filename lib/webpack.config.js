const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, './dist/src'),
		filename: 'index.js',
	},
	plugins: [
		new HTMLPlugin({
			template: path.resolve(__dirname, 'src/index.ejs'),
		}),
		new CopyPlugin([
			{
				from: path.resolve(__dirname, 'dist/lib'),
				to: path.resolve(__dirname, 'dist/src/lib'),
			},
		]),
		new webpack.DllReferencePlugin({
			scope: 'sergii',
			context: __dirname,
			manifest: require('./build/library/lib.json'),
		}),
	],
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.ts', '.tsx', '.js'],
	},
	devServer: {
		writeToDisk: true,
	},
};
