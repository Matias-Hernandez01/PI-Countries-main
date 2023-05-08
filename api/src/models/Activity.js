const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
      duracion: {
        type: DataTypes.DECIMAL(4, 1),
        allowNull: false,
        validation: {
          min: 0.1,
          max: 999.9,
        },
        temporada: {
          type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
          allowNull: false,
        },
      },
    },
  });
};
