/* eslint-disable */
const path = require('path')

module.exports = ({ root }) => ({
	mode: 'production',
	output: {
		path: path.resolve(root, 'dist'),
		filename: '[name].js',
		publicPath: '/',
		library: '["[name]"]',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: [['@babel/preset-env', {
								'targets': {
									'node': 'current'
								},
								'modules': false
							}], '@babel/preset-react'],
							plugins: [
								['@babel/plugin-proposal-class-properties', {
									'spec': true
								}],
								'@babel/plugin-transform-runtime',
								'@babel/plugin-transform-modules-commonjs',
								['@babel/plugin-proposal-decorators', {
									decoratorsBeforeExport: true,
									legacy: false
								}],
								'@babel/plugin-transform-react-jsx',
								'transform-react-pug',
								'lodash'
							]
						}
					}
				]
			}
		]
	}
})