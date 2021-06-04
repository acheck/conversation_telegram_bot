var dotenv = require('dotenv')
dotenv.config({ silent: true })
dotenv.load()

var path = require('path')

require('babel-polyfill')
require('babel-register')

const Bot = require('./src/bot')
var bot = new Bot(process.env.BOT_TOKEN)
bot.start()
