const express = require('express');
const cors = require('cors');
const axios = require('axios');

const server = express();

server.use(cors());

server.get('/', async (request, response) => {
  return response.json([
    { name: 'Daniel' },
    { name: 'Rafael' },
  ]);
});

server.get('/jsonplaceholder', async (request, response) => {
  const { data } = await axios ('https://jsonplaceholder.typicode.com/users');
  
  return response.json(data);
});

server.listen(3333, () => {
  console.log('Server running on port 3333.')
});