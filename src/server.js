const express = require('express');

const server = express()

server.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

server.listen(3333, () => {
  console.log('Server running on port 3333.')
})