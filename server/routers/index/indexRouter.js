const express = require('express');
const indexController = require('../../controllers/index/indexController')
const router = express.Router()


router.get('/', (req, res) => {
    // res.render('index/index', {a: '扶贫页面'})
    indexController.render(req,res)
})

module.exports = router