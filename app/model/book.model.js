module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define('book', {
		title: {
			type: Sequelize.STRING
		},
		isbn: {
			type: Sequelize.STRING(10),
			primaryKey: true
		}
	},
		{
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			tableName: 'book'
		}
	);

	return Book;
}