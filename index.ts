import * as Hapi from 'hapi'
import { Vue } from 'vue-property-decorator'
import * as VSR from 'vue-server-renderer'

const server: Hapi.Server = new Hapi.Server({
  host: 'localhost',
  port: 8339
})

server.route([
  {
    method: 'GET',
    path: '/puzzle/admin',
    handler: function (request, h) {
      return 'Admin'
    }
  },
  {
    method: 'GET',
    path: '/puzzle/api',
    handler: function (request, h) {
      return 'API'
    }
  },
  {
    method: 'GET',
    path: '/puzzle/editor',
    handler: function (request, h) {
      return 'Editor'
    }
  },
  {
    method: 'GET',
    path: '/puzzle/entry',
    handler: function (request, h) {
      return 'Editor'
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: function (request, h) {
      const app: Vue = new Vue({
        template: '<h1>Puzzle</h1>'
      })
      const renderer = VSR.createRenderer()
      let page = 'Puzzle'
      renderer
        .renderToString(app, function (err, html) {
          if (err) {
            throw err
          }
          page = html
        })
      return page
    }
  }
])

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
