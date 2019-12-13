import express from 'express'
import documentation from './documentation'

let routes = express()

routes
  .use('/documentation', documentation)

export default routes