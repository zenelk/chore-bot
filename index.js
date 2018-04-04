require('dotenv').config()

const Telegraf = require('telegraf')
var pg = require('pg')

const bot = new Telegraf(process.env.BOT_TOKEN)
var pool = new pg.Pool({
  ssl: {}
})

function checkAdmin (ctx) {
  const requestUserId = ctx.message.from.id
  return ctx.getChatAdministrators().then((admins) => {
    return new Promise((resolve, reject) => {
      const adminIds = admins.map((admin) => admin.user.id)
      if (adminIds.includes(requestUserId)) {
        resolve()
      } else {
        reject(new Error('User is not admin!'))
      }
    })
  })
}

function handleRegisterChat (ctx) {
  checkAdmin(ctx).then(() => {
    const insertText = 'INSERT INTO chats(tg_id) VALUES($1)'
    return pool.query(insertText, [ctx.chat.id])
  }).catch((error) => {
    ctx.reply(`I had an error processing your request. ("${error}")`)
  })
}

function handleAdd (ctx) {
  checkAdmin(ctx).then(() => {
    console.log('I\'ll let you do this...')
  }, (error) => {
    ctx.reply(`I had an error processing your request. ("${error}")`)
  })
}

function handleDone (ctx) {
  console.log(ctx.message.text)
}

function setupBot () {
  bot.start((ctx) => ctx.reply('I\'m started'))
  bot.help((ctx) => ctx.reply('There\'s no help for you.'))
  bot.settings((ctx) => ctx.reply('No settings.'))

  bot.command('/test', (ctx) => ctx.reply('I am functioning normally.'))

  bot.command('/register_chat', handleRegisterChat)
  bot.command('/add', handleAdd)
  bot.command('/done', handleDone)
}

// Get the bot's username from Telegram.
bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
  setupBot()

  bot.startPolling()
  // pool.end()
})
