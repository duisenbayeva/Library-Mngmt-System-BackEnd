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
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initialBooks();
});
 
require('./app/route/book.route.js')(app);
require('./app/route/customer.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
function initial(){
 
  let customers = [
    {
      firstname: "Joe",
      lastname: "Thomas",
      age: 36
    },
    {
      firstname: "Peter",
      lastname: "Smith",
      age: 18
    },
    {
      firstname: "Lauren",
      lastname: "Taylor",
      age: 31
    },
    {
      firstname: "Mary",
      lastname: "Taylor",
      age: 24
    },
    {
      firstname: "David",
      lastname: "Moore",
      age: 25
    },
    {
      firstname: "Holly",
      lastname: "Davies",
      age: 27
    },
    {
      firstname: "Michael",
      lastname: "Brown",
      age: 45
    }
  ]
 
  // Init data -> save to MySQL
  const Customer = db.customers;
  for (let i = 0; i < customers.length; i++) { 
    Customer.create(customers[i]);  
  }
}

 
function initialBooks(){
 
  let books = [
    {
      title: "Joe",
      isbn: "1234567",
      authors: "author1",
      available: true
    },
    {
      title: "Chandler",
      isbn: "222333",
      authors: "author2",
      available: true
    },
    {
      title: "Rachel",
      isbn: "442233",
      authors: "author1, author2",
      available: true
    }
  ]
 
  // Init data -> save to MySQL
  const Book = db.books;
  for (let i = 0; i < books.length; i++) { 
    Book.create(books[i]);  
  }
}