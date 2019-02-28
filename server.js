var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync();//.then(() => {
console.log('Drop and Resync with { force: true }');
//initialBooks();
//});

require('./app/route/main.route.js')(app);

// Create a Server
var server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

function initialBooks() {

  let books = [
    {
      title: "Sherlock",
      isbn: "1234567"
    },
    {
      title: "Scarlett rose",
      isbn: "222333"
    },
    {
      title: "451' F",
      isbn: "442233"
    }
  ]

  let authors = [{ name: "Arthur Conan Doyle" }, { name: "Assistant" }];

  // Init data -> save to MySQL
  const Book = db.books;
  for (let i = 0; i < books.length; i++) {
    Book.create(books[i]);
  }
}