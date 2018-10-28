module.exports = (sequelize, DataTypes) => {
    const listings = sequelize.define(
      'listings',
      {
        ListingId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        Name: DataTypes.STRING,
        Position: DataTypes.STRING,
        Location: DataTypes.STRING
      },
    );
    return listings;
  };