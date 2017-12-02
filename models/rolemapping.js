'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('rolemapping', {
    principaltype: {
      type: DataTypes.STRING,
    },
    principalid: {
      type: DataTypes.STRING,
    },
    roleid: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'rolemapping',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

