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
db.sequelize.sync()//.then(() => {
//console.log('Drop and Resync with { force: true }');
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

  // const csvFilePath = '../Documents/DB/books.csv'
  // const csv = require('csvtojson')

  // var request = require('request');
  // csv()
  //   .fromFile(csvFilePath)
  //   .then((jsonObj) => {
  //     console.log(jsonObj);
  //     /**
  //      * [
  //      * 	{a:"1", b:"2", c:"3"},
  //      * 	{a:"4", b:"5". c:"6"}
  //      * ]
  //      */
  //   })

  // Async / await usage
  //const jsonArray = csv().fromFile(csvFilePath);

  // Init data -> save to Postgres
  // setTimeout(new function () {
  //   const Book = db.books;
  //   for (let i = 0; i < 5; i++) {
  //     //Book.create(books[i]);
  //     console.log(jsonArray[i].Title, jsonArray[i].ISBN10, jsonArray[i].field7)
  //   }
  // }
  //   , 6000);
}

