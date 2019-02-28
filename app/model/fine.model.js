module.exports = (sequelize, Sequelize) => {
  const fine = sequelize.define('fine', {
    fine_amt: {
      type: Sequelize.DECIMAL(10, 2)
    },
    paid: {
      type: Sequelize.BOOLEAN
    },
    loan_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }
  },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      tableName: 'fine'
    });

  return fine;
}

