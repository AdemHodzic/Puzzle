import * as Hapi from 'hapi'

const server: Hapi.Server = new Hapi.Server({
  host: 'localhost',
  port: 8000
})

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: function (request, h) {
    console.log(request)
    return 'hello world'
  }
})

async function start() {
  try {
    await server.start()
  } catch(err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server tunning at:', server.info.uri)
}

start()
