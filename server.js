process.env.DEBUG = 'sig*'
const appRoot = require('app-root-path')
const SignalKServer = require('signalk-server')

const config = {
  appPath: appRoot.path,
  configPath: '/data/signalk',
  disableWriteSettings: false,
  settings: {
    strategy: './tokensecurity',
  }
}
console.log('STARTING!')
const server = new SignalKServer({ config })
server.start()
  .then(res => {
    console.log('START COMPLETE!')
  })
  .catch(err => {
    console.error(err)
    process.exit(-1)
  })

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}. Forcing -1 to do restart.`)
  process.exit(-1)
})
