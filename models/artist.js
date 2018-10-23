module.exports = (sequelize, DataTypes) => {
    const artists = sequelize.define(
      'artists',
      {
        ArtistId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        Name: DataTypes.STRING
      }
    );
    return artists;
  };