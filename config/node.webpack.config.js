/* eslint-disable */
const path = require('path')
const merge = require('webpack-merge')
const createCommonConfig = require('./common.webpack.config')

module.exports = ({ root }) => merge(
	createCommonConfig({
		root
	}), {
		target: 'node',
		entry: {
			template: path.resolve(root, 'src', 'template.js'),
			settings: path.resolve(root, 'src', 'settings.js')
		},
		resolve: {
			mainFiles: ['index'],
			modules: ['node_modules', 'lib'],
		}
	}
)