const path = require('path')

const createNodeConfig = require('./web.webpack.config')
const createWebConfig = require('./node.webpack.config')

const root = path.resolve(__dirname, '..')

module.exports = [
	createWebConfig({ root }),
	createNodeConfig({ root })
]