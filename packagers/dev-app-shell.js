const path = require('path')
const pathToAppShell = path.resolve(__dirname, '..', '..', '..', 'cs', 'app-shell')
const dev = require(path.resolve(pathToAppShell, 'packagers', 'dev'))

const root = path.resolve(__dirname, '..', 'src')

dev({
	kiosk: false,
	mode: 'development',
	root,
})
