import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Region } from "../models/modelsRegion.js";

const Comuna = sequelize.define('Comuna', {
    codigo_comuna: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(30)
    },
    codigo_region: {
        type: DataTypes.INTEGER,
        references: {
            model: Region,
            key: 'codigo_region'
        }
    }
}, {
    tableName: 'comuna',
    createdAt: false,
    updatedAt: false
});


async function checkComunaData() {
    try {
      const comunas = await Comuna.findAll();
      comunas.forEach((comuna) => {
        console.log(comuna.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener las comunas:", error);
    }
  }
  
  checkComunaData();

export {
    Comuna
}