const express = require('express');
const cors = require('cors');

const server = express()

server.use(cors())

server.get('/', (request, response) => {
  return response.json([
    { name: 'Daniel' },
    { name: 'Rafael' },
  ])
})

server.listen(3333, () => {
  console.log('Server running on port 3333.')
})