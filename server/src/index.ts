import express from 'express'

const app = express()

app.get('/', req => {
  console.log('hi')
})

app.listen(3000, () => {
  console.log('started')
})
