'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.DATE,
    },
    modified: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'role',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

