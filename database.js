// Loading and initialising the library- option would go in the empty bracket if we had any
const pgp = require('pg-promise')()

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_DATABASE } = process.env

//connection string
const cn = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const db = pgp(cn)

module.exports = db