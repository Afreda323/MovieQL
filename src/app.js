const Koa = require('koa')
const logger = require('koa-logger')
const helmet = require('koa-helmet')
const mount = require('koa-mount')
const cors = require('@koa/cors')
const graphqlHTTP = require('koa-graphql')
const schema = require('./graphql/Schema')

const { PORT, NODE_ENV } = process.env

// Create Koa Application
const app = new Koa()

app
  .use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  })
  .use(logger())
  .use(helmet())
  .use(cors())
  .use(
    mount(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    )
  )

// Start the application
app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
