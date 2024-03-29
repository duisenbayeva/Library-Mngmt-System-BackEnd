module.exports = function (app) {
    const main = require('../controller/main.controller.js');

    // Retrieve all Books
    app.get('/api/books/:offset/:pagesize/:search', main.findAllBooks);

    // Retrieve all Books
    app.get('/api/books/:offset/:pagesize', main.findAllBooks);

    // Create a new borrower
    app.post('/api/borrowers', main.createBorrower);

    app.post('/api/newloan', main.createLoan);

    // Retrieve all Books
    app.get('/api/borrowers/:offset/:pagesize/:search', main.findAllBorrowers);

    // Retrieve all Books
    app.get('/api/borrowers/:offset/:pagesize', main.findAllBorrowers);

    // Retrieve a single borrower by Id
    app.get('/api/borrowers/:id', main.findBorrowerById);

    // Retrieve all Books
    app.get('/api/loans/:offset/:pagesize', main.findAllLoans);

    // Retrieve a single borrower by Id
    //app.get('/api/loans/:id', main.findLoansByBorrower);

    // Update a borrower with Id
    //    app.put('/api/borrowers', main.update);

    // Delete a borrower with Id
    // app.delete('/api/borrowers/:id', main.delete);

}