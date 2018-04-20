const express = require('express');
const morgan = require('morgan');

const app = express();

const hostname = '127.0.0.1';
const port = 3030;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello Self!');
});

app.listen(port, hostname, () => {
  console.log(`I guess you should check out http://localhost:${port}`);
});
