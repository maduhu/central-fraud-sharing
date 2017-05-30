const RC = require('rc')('FSHARE', require('../../config/default.json'))

module.exports = {
  HOSTNAME: RC.HOSTNAME.replace(/\/$/, ''),
  DATABASE_URI: RC.DATABASE_URI,
  PORT: RC.PORT
}
