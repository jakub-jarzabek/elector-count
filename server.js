const appExpress = require('express')()
const server = require('http').Server(appExpress)
const io = require('socket.io')(server)
const next = require('next')

const app = next(true)
const handle = app.getRequestHandler()

let port = 3000

io.on('connection', (socket) => {
  socket.on('chatMsg', (msg) => {
    io.local.emit('message', msg)
  })
  socket.on('wipeMessages', () => {
    io.local.emit('wipe')
  })
})

app.prepare().then(() => {
  appExpress.all('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`listening on port ${port}`)
  })
})
