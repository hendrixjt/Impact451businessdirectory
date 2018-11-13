module.exports = (sequelize, DataTypes) => {
    const formInput = sequelize.define(
      'formInput',
      {
        FormId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        currentmodule: DataTypes.STRING
      },
    );
    return formInput;
  };