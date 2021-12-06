require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const morgan = require('morgan')
const ejs = require('ejs')
const flash = require('express-flash')

const homeRouter = require('./routes/home')
const productsRouter = require('./routes/products')
const loginRouter = require('./routes/products')
const errorRouter = require('./routes/error')

const PORT = process.env.PORT || 3000

const app = express()

// BODY PARSER
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// MIDDLEWARE: LOGGER
app.use(morgan('dev'))

// USING TEMPLATE ENGINE
app.set('view engine', 'ejs')

// SET STATIC FOLDER
app.use(express.static('public'))


app.use(session({
  name: 'inventoryt_sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitailized: false,
  cookie: {
    maxAge: 1000*60*60*24
  }
}))

app.use(flash())

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// ROUTES
// app.use('/login', loginRouter)
// app.use('/logout', logoutRouter)
// app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/', homeRouter)
// app.use('*', errorRouter)

app.listen(PORT, () => {
  console.log(`LISTENING AT http://localhost:${PORT}`)
})