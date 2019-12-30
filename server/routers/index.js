const express = require('express')
const router = express.Router()


const indexRouter = require('./index/indexRouter')


router.use(indexRouter)

module.exports = router;