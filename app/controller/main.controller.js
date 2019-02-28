const db = require('../config/db.config.js');
const Books = db.books;
const Borrower = db.borrowers;


// FETCH All Books
exports.findAllBooks = (req, res) => {

    Books.findAndCountAll({
        offset: 0,
        limit: 3
    })
        .then(books => {
            console.log(books.count);
            console.log(books.rows);
            res.json(books.rows);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        });

};


// Post a Borrower
exports.createBorrower = (req, res) => {
    // Save to PostgreSQL database
    Borrower.create({
        "fname": req.body.firstname,
        "lname": req.body.lastname,
        "ssn": req.body.ssn,
        "phone": req.body.phone,
        "address": req.body.address,
        "city": req.body.city,
        "state": req.body.state,
        "email": req.body.email
    }).then(borrower => {
        // Send created borrower to client
        res.json(borrower);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// FETCH All Borrowers
exports.findAllBorrowers = (req, res) => {
    Borrower.findAll().then(borrowers => {
        // Send All Borrowers to Client
        res.json(borrowers.sort(function (b1, b2) { return b1.card_id - b2.card_id }));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// Find a Borrower by Id
exports.findBorrowerById = (req, res) => {
    Borrower.findById(req.params.id).then(borrower => {
        res.json(borrower);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};