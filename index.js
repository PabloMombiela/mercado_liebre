const express = require('express')
const app = express()
const path = require('path')


app.listen(3030, () => {

    console.log('server ok')
})


app.use (express.static ( __dirname +'/public')) 


app.get('/', function (req, res) {

    let file = path.resolve('index.html')
    res.sendFile(file)


});

app.get('/index.css', function (req, res) {

    let file = path.resolve('style/index.css')
    res.sendFile(file)

})



