'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('acl', {
    model: {
      type: DataTypes.STRING,
    },
    property: {
      type: DataTypes.STRING,
    },
    accesstype: {
      type: DataTypes.STRING,
    },
    permission: {
      type: DataTypes.STRING,
    },
    principaltype: {
      type: DataTypes.STRING,
    },
    principalid: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'acl',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

