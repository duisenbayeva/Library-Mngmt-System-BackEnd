module.exports = function(app) {
    const borrowers = require('../controller/borrower.controller.js');
 
    // Create a new borrower
    app.post('/api/borrowers', borrowers.create);
 
    // Retrieve all borrower
    app.get('/api/borrowers', borrowers.findAll);
 
    // Retrieve a single borrower by Id
    app.get('/api/borrowers/:id', borrowers.findById);
 
    // Update a borrower with Id
    app.put('/api/borrowers', borrowers.update);
 
    // Delete a borrower with Id
    app.delete('/api/borrowers/:id', borrowers.delete);
}