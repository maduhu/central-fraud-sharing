const RC = require('rc')('FSHARE', require('../../config/default.json'))

module.exports = {
  HOSTNAME: RC.HOSTNAME.replace(/\/$/, ''),
  DATABASE_URI: RC.DATABASE_URI,
  PORT: RC.PORT,
  END_USER_REGISTRY_URL: RC.END_USER_REGISTRY_URL,
  SCHEME_ID: RC.SCHEME_ID
}
