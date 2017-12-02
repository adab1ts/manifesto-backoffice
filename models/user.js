'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('user', {
    realm: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    emailverified: {
      type: DataTypes.BOOLEAN,
    },
    verificationtoken: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'user',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

