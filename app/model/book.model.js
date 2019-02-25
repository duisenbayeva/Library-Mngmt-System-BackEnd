module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define('book', {
	  title: {
			type: Sequelize.STRING
	  },
	  isbn: {
			type: Sequelize.STRING
	  },
	  authors: {
		  type: Sequelize.STRING
		},
		available:{
			type: Sequelize.BOOLEAN
		}
	});
	
	return Book;
}