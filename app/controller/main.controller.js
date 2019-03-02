const db = require('../config/db.config.js');
const Books = db.books;
const Borrower = db.borrowers;
const BookLoan = db.book_loan;


// FETCH All Books
exports.findAllBooks = (req, res) => {
    var search = req.params.search ? req.params.search : "";

    db.sequelize.query(
        "select BOOK.isbn, title, authors FROM BOOK, " +
        "(SELECT isbn, string_agg(name, ', ' ORDER BY name) as authors FROM AUTHOR " +
        "JOIN BOOK_AUTHOR ON AUTHOR.author_id=BOOK_AUTHOR.author_id GROUP  BY isbn) as B_AUTHORS " +
        "WHERE BOOK.isbn=B_AUTHORS.isbn and (title like ('%" + search + "%') OR authors like ('%" + search + "%'))"
        + " LIMIT " + req.params.pagesize + " OFFSET " + req.params.offset,
        {
            raw: true,
            type: db.sequelize.QueryTypes.SELECT
        }
    )
        .then(books => {

            res.json({ items: books, total_count: books.length });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "error", details: err });
        });
};


// Post a Borrower
exports.createBorrower = (req, res) => {
    // Save to PostgreSQL database
    Borrower.create({
        "fname": req.body.fname,
        "lname": req.body.lname,
        "ssn": req.body.ssn,
        "phone": req.body.phone,
        "address": req.body.address,
        "city": req.body.city,
        "state": req.body.state,
        "email": req.body.email
    }).then(borrower => {
        // Send created borrower to client
        res.json({ borrower: borrower, message: "Successfully was created" });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// Post a Borrower
exports.createLoan = (req, res) => {
    // Save to PostgreSQL database
    console.log("creating..", req.body);
    BookLoan.create({
        "isbn": req.body.book.isbn,
        "card_id": req.body.borrower.card_id,
        "date_out": new Date(Date.now()),
        "due_date": new Date(Date.now() + 12096e5)
    }).then(BookLoan => {
        // Send created borrower to client
        res.json({ bookloan: BookLoan, message: "Successfully created" });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// FETCH All Borrowers
exports.findAllBorrowers = (req, res) => {
    var search = req.params.search ? req.params.search : "";

    db.sequelize.query(
        "select * FROM BORROWER " +
        "WHERE ssn like ('%" + search + "%') LIMIT " + req.params.pagesize + " OFFSET " + req.params.offset,
        {
            raw: true,
            type: db.sequelize.QueryTypes.SELECT
        }
    )
        .then(borrowers => {
            res.json({ items: borrowers, total_count: borrowers.length });
        })
        .catch(err => {
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