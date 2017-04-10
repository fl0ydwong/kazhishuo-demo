const express = require('express');
const port = process.env.PORT || 3000;
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const resolve = file => path.resolve(__dirname, file);
const api = require('./api');
const db = require('./model/db');

const app = express();
const userInit = require('./user.json');
app.set('port', (process.env.port || 3000))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))
app.use(api)



app.get('*', function (req, res) {
    const fileName = 'index.html';
    if(!db.initialized){
        new db.User(userInit)
            .save()
            .then(() => {
                res.status(200).end()
                db.initialized = true
            })
            .catch(() => res.status(500).end())
    }

    const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
    // const html = fs.readFileSync(resolve('../setup.html'), 'utf-8')
    res.send(html)
})

// web应用加载陆游对象，并设置访问入口为home
app.use('/home', router);

// 监听端口
app.listen(app.get('port'), function () {
    console.log('Visit http://localhost:' + app.get('port'))
})