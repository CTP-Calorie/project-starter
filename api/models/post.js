'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  
  Post.init({
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
    calories: {
      type: DataTypes.REAL,
      
      
    },
    cholesterol: {
      type: DataTypes.REAL,
      
      
    },
    dietary_fiber: {
      type : DataTypes.REAL
    },
    sugars: {
      type : DataTypes.REAL
    },
    total_carbohydrate: {
      type : DataTypes.REAL
    },
    sodium: {
      type : DataTypes.REAL
    },
    saturated_fat: {
      type : DataTypes.REAL
    },
    potassium: {
      type : DataTypes.REAL
    }    ,
    protein: {
      type : DataTypes.REAL
    }
    ,
    total_fat: {
      type : DataTypes.REAL
    }
  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
  };

  return Post;
};