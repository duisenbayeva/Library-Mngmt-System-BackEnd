module.exports = (sequelize, Sequelize) => {
    const Borrower = sequelize.define('borrower', {
        fname: {
            type: Sequelize.STRING(20)
        },
        lname: {
            type: Sequelize.STRING(20)
        },
        card_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ssn: {
            type: Sequelize.STRING(11)
        },
        phone: {
            type: Sequelize.STRING(15)
        },
        address: {
            type: Sequelize.STRING(50)
        },
        city: {
            type: Sequelize.STRING(20)
        },
        state: {
            type: Sequelize.STRING(10)
        },
        email: {
            type: Sequelize.STRING(30)
        }
    },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'borrower'
        });

    return Borrower;
}