/* eslint-disable */

const koutoSwiss = require('kouto-swiss')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const createCommonConfig = require('./common.webpack.config')

module.exports = ({ root }) => merge(
	createCommonConfig({
		root
	}), {
		target: 'web',
		entry: {
			app: path.resolve(root, 'src', 'index.js'),
			init: path.resolve(root, 'src', 'app-shell-kit.js')
		},
		resolve: {
			mainFiles: ['index', 'component'],
			modules: ['node_modules', 'lib', 'shared'],
			alias: {
				'store': path.resolve(root, 'src', 'store'),
				'utils': '@cs-museum/utils',
				'app-shell-kit': path.resolve(root, 'src', 'app-shell-kit'),
				'cs-data-hooks': path.resolve(root, 'src', 'cs-data-hooks'),
				'react': path.resolve(root, 'lib', 'hook-modules', 'react'),
				'react-dom': process.env.NODE_ENV === 'development' ?
					path.resolve(root, 'lib', 'hook-modules', 'react-dom') :
					path.resolve(root, 'node_modules', 'react-dom'),
				'langs': path.resolve(root, 'lib', 'hook-modules', 'langs'),
				'styled-components': path.resolve(root, 'lib', 'hook-modules', 'styled-components'),
				'react-redux': path.resolve(root, 'lib', 'hook-modules', 'react-redux')
			}
		},
		module: {
			rules: [
				{
					test: /\.cson$/,
					use: {
						loader: 'cson-loader'
					}
				},
				{
					test: /\.pug$/,
					use: {
						loader: 'pug-loader'
					}
				},
				{
					test: /\.raw\.svg$/,
					use: {
						loader: 'raw-loader'
					}
				},
				{
					test: /\.preload\.(png|jpg|gif|ttf|woff|woff2|eot|svg|otf)$/,
					use: {
						loader: 'url-loader'
					}
				},
				{
					test: /\.(styl|css)$/,
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'stylus-loader',
							options: {
								use: [koutoSwiss()]
							}
						}
					]
				},
				{
					test: filePath => {
						return (/\.(webp|ttf|woff|woff2|eot|svg|otf)$/).test(filePath) &&
							!(/\.preload\.(webp|ttf|woff|woff2|eot|svg|otf)$/).test(filePath) &&
							!(/\.raw\.svg$/).test(filePath)
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[hash].[ext]',
								outputPath: 'statics/'
							}
						}
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[hash].webp',
								outputPath: 'statics/'
							}
						},
						{
							loader: 'webp-loader'
						}
					]
				}
			]
		},
		plugins: [
			new webpack.ProvidePlugin({
				React: 'react'
			})
		]
	}
)