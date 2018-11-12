module.exports = (sequelize, DataTypes) => {
    const listings = sequelize.define(
      'listings',
      {
        ListingId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        Company: DataTypes.STRING,
        Position: DataTypes.STRING,
        Location: DataTypes.STRING
      },
    );
    return listings;
  };