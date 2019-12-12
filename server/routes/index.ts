import express from 'express'

let routes = express()

routes
  .use('/', (req, res) => { res.json({ msg: 'index routes' }) })

export default routes