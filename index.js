const express = require('express')
const app = express()
const path = require('path')



app.listen(3030, () => {

    console.log('server ok')
})

app.get('/', function (req, res) {

    let file = path.resolve('index.html')
    res.sendFile(file)


});

app.get('/index.css', function (req, res) {

    let file = path.resolve('public/index.css')
    res.sendFile(file)

})



