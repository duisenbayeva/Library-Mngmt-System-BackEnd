module.exports = function (app) {
    const main = require('../controller/main.controller.js');

    // Retrieve all Customer
    app.get('/api/books/:offset/:pagesize/:search', main.findAllBooks);

    // Retrieve all Customer
    app.get('/api/books/:offset/:pagesize', main.findAllBooks);

    // Create a new borrower
    app.post('/api/borrowers', main.createBorrower);

    // Retrieve all borrower
    app.get('/api/borrowers', main.findAllBorrowers);

    // Retrieve a single borrower by Id
    app.get('/api/borrowers/:id', main.findBorrowerById);

    // Update a borrower with Id
    //    app.put('/api/borrowers', main.update);

    // Delete a borrower with Id
    // app.delete('/api/borrowers/:id', main.delete);

}