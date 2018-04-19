const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Self!');
})

app.listen(3434);