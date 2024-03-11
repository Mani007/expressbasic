const express = require('express')
const path = require('path')
const app = express()
const port = 3300

app.use(express.static(path.join(__dirname, 'public')));


const mymiddleware = (req,res,next) => {
    console.log(req)
    //next()
}

app.use(mymiddleware)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    //res.sendfile(path.join(__dirname,'index.html' ))
    //res.status(500)
    res.json({
        first: true,
        second: 25,
        third: 'Hello World!'
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})