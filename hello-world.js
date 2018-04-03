require('dotenv').config()

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.command('/oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('/modern', ({ reply }) => reply('Yo'))
// bot.command('/hipster', Telegraf.reply('λ'))
bot.command('/test', (ctx) => ctx.reply('I am functioning normally.'))
bot.startPolling()
