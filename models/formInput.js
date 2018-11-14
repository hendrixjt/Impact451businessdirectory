module.exports = (sequelize, DataTypes) => {
    const formInput = sequelize.define(
      'formInput',
      {
        FormId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        Name: DataTypes.STRING,
        Email: DataTypes.STRING,
        CurrentModule: DataTypes.STRING
      },
    );
    return formInput;
  };