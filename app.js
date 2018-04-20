const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const db = require('./src/models')

const app = express();

const hostname = '127.0.0.1';
const port = 3030;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
  let books;
  db.Book.findAll({
    include: [db.Comment]
  }).then((books) => {
    // res.json(books)
    res.render("index", {books: books})
  })
  
});

app.get('/favicon.ico', (req, res) => {
  res.status(204);
});

app.listen(port, hostname, () => {
  console.log(`I guess you should check out http://localhost:${port}`);
});
