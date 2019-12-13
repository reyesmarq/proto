import express from 'express'
import apiUI from 'swagger-ui-express'
import yamljs from 'yamljs'

let router = express()
let apiDoc = yamljs.load('documentation.yaml')

router.use('/', apiUI.serve, apiUI.setup(apiDoc))

export default router