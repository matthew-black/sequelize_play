const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const models = require('./src/models')

const app = express();

const hostname = '127.0.0.1';
const port = 3030;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
  models.Book.findAll({
    include: [models.Comment]
  }).then((books) => {
    // res.json(books)
    res.render("index", {books: books})
  })
})

app.get('/books/:id', (req, res) => {
  models.Book.findOne({
    where: {id: req.params.id},
    include: [{
      model: models.Comment,
      where: { book_id: req.params.id }
    }]
  }).then((book) => {
    console.log("************************************")
    console.log(book.Comments)
    console.log("************************************")
    res.render("show", {book: book})
  })
})

app.get('/favicon.ico', (req, res) => {
  res.status(204);
})

app.listen(port, hostname, () => {
  console.log(`I guess you should check out http://localhost:${port}`);
});
