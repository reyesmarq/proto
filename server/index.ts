import express from 'express'
import next from 'next'
import routes from './routes'

let port = process.env.PORT || 3000
let dev = process.env.NODE_ENV !== 'production'
let app = next({ dev })
let handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    let server = express()

    server
      .use('/api/v1', routes)
      .get('*', (req, res) => handle(req, res))
      .listen(port, () => console.log(`> Running at port ${port}`))
  })