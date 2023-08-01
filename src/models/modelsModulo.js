import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Modulo = sequelize.define('Modulo', {
    codigo_modulo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(100)
    },
    duracion_horas: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'modulo',
    createdAt: false,
    updatedAt: false
});




async function checkModuloData() {
  try {
    const modulos = await Modulo.findAll();
    modulos.forEach((modulo) => {
      console.log(modulo.toJSON());
    });
  } catch (error) {
    console.error("Error al obtener los módulos:", error);
  }
}

checkModuloData();


export {
    Modulo
}