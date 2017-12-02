'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('accesstoken', {
    ttl: {
      type: DataTypes.INTEGER,
    },
    scopes: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.DATE,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'accesstoken',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

