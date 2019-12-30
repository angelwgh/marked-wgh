const express = require('express')
const open = require('open')
const config = require('./config/config')
const router = require('./server/routers')

const app = express()
const PORT = config.dev.PORT

app.set('views', './server/views')
app.set('view engine', 'ejs')

app.use('/', router)

// 设置静态文件目录
app.use('/web', express.static(__dirname + '/src'))


app.get('/', (req, res) => {
    res.send('首页')
})

app.listen(PORT, () => {
	const url = 'http://localhost:'+PORT;

	// open(url, 'chrome')
    console.log('localhost:'+PORT)
})