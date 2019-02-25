module.exports = function(app) {
    const books = require('../controller/book.controller.js');
 
    // Create a new Customer
    // app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
     app.get('/api/books', books.findAll);
 
    // Retrieve a single Customer by Id
    // app.get('/api/customers/:id', customers.findById);
 
    // Update a Customer with Id
    // app.put('/api/customers', customers.update);
 
    // Delete a Customer with Id
    // app.delete('/api/customers/:id', customers.delete);
}