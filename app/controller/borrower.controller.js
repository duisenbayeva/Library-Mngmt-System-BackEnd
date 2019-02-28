const db = require('../config/db.config.js');
const Borrower = db.borrowers;

// Post a Borrower
exports.create = (req, res) => {	
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
			res.status(500).json({msg: "error", details: err});
		});
};
 
// FETCH All Borrowers
exports.findAll = (req, res) => {
	Borrower.findAll().then(borrowers => {
			// Send All Borrowers to Client
			res.json(borrowers.sort(function(b1, b2){return b1.card_id - b2.card_id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Find a Borrower by Id
exports.findById = (req, res) => {	
	Borrower.findById(req.params.id).then(borrower => {
			res.json(borrower);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
// Update a Borrower
exports.update = (req, res) => {
	const id = req.body.id;
	Borrower.update( req.body, 
			{ where: {card_id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Borrower Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

// Delete a Borrower by Id
exports.delete = (req, res) => {
	const id = req.params.id;
	Borrower.destroy({
			where: { card_id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Borrower Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};