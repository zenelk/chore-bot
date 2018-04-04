// var express = require('express')
// var app = express()
// var pg = require('pg')

// app.set('port', (process.env.PORT || 5000))

// var pool = new pg.Pool()

// // connection using created pool
// pool.connect(function (err, client, done) {
//   client.query(/* etc, etc */)
//   done()
// })

// // pool shutdown
// pool.end()

// pg.connect(process.env.DATABASE_URL, function (err, client, done) {
//   if (err) {
//     throw err
//   } else {
//     done()
//   }
// })

// app.get('/db', function (request, response) {

// })

// app.listen(app.get('port'), function () {
//   console.log('Node app is running on port', app.get('port'))
// })

// require('dotenv').config()

// // const Telegraf = require('telegraf')
// var pg = require('pg')
// var express = require('express')
// var app = express()

// process.title = 'chore-bot'

// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function (err, client, done) {
//     client.query('SELECT * FROM test_table', function (err, result) {
//       done()
//       if (err) {
//         console.error(err); response.send('Error ' + err)
//       } else {
//         response.render('pages/db', {results: result.rows})
//       }
//     })
//   })
// })

// // const bot = new Telegraf(process.env.BOT_TOKEN)
// // bot.command('/test', (ctx) => ctx.reply('I am functioning normally.'))
// // bot.command('/addChat')

// // bot.startPolling()
