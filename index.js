const express = require('express')
const path = require('path')
const app = express()
const port = 3300

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendfile(path.join(__dirname,'index.html' ))
    res.status(500)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})