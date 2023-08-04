import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Region = sequelize.define('Region', {
    codigo_region: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(30)
    }
}, {
    tableName: 'region',
    createdAt: false,
    updatedAt: false
});



async function checkRegionData() {
    try {
      const regions = await Region.findAll();
      regions.forEach((region) => {
        console.log(region.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener las regiones:", error);
    }
  }
  
  checkRegionData();



export {
    Region
}

