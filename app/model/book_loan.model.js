module.exports = (sequelize, Sequelize) => {
    const book_loan = sequelize.define('book_loan', {
        loan_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date_out: {
            type: Sequelize.DATEONLY
        },
        date_in: {
            type: Sequelize.DATEONLY
        },
        due_date: {
            type: Sequelize.DATEONLY
        }
    },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'book_loan'
        });

    return book_loan;
}

