import express from 'express'
import next from 'next'
import routes from './routes'

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}


let port = process.env.PORT || 3000
let dev = process.env.NODE_ENV !== 'production'
let app = next({ dev })
let handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    let server = express()

    server
      // endpoints
      .use('/api/v1', routes)
      // nextjs
      .get('*', (req, res) => handle(req, res))
      // run the server
      .listen(port, () => console.log(`> Running at port ${port}`))
  })