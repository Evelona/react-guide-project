const cp = require('child_process')
const path = require('path')

const pathToServer = path.resolve(__dirname, '..', '..', '..', 'cs', 'server')

const appKey = process.argv
	.slice(2)
	.filter(arg => (arg.includes('appKey')))
	.join()

const options = {
	cwd: pathToServer,
	shell: true
}

const ps = cp.exec(`npm run dev ${appKey}`, options)

ps.stdout.on('data', (data) => {
	console.log(data)
})

ps.stderr.on('data', (data) => {
	console.error(data)
})