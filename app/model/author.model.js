module.exports = (sequelize, Sequelize) => {
	const Author = sequelize.define('author', {
		name: {
			type: Sequelize.STRING
		},
		author_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}
	},
		{
			timestamps: false,
			underscored: true,
			freezeTableName: true,
			tableName: 'author'
		});

	return Author;
}