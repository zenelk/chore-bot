require('dotenv').config()

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

function handleDone (ctx) {
  console.log(ctx.message.text)
}

function setupBot () {
  bot.start((ctx) => ctx.reply('I\'m started'))
  bot.help((ctx) => ctx.reply('There\'s no help for you.'))
  bot.settings((ctx) => ctx.reply('No settings.'))

  bot.command('/test', (ctx) => ctx.reply('I am functioning normally.'))
  bot.command('/done', handleDone)

  bot.startPolling()
}

// Get the bot's username from Telegram.
bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
  setupBot()
})
