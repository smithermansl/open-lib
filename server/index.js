const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5555

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../client/public')))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

module.exports = app
