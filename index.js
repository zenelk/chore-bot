require('dotenv').config()

const Telegraf = require('telegraf')

process.title = 'chore-bot'

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('/test', (ctx) => ctx.reply('I am functioning normally.'))

bot.startPolling()
