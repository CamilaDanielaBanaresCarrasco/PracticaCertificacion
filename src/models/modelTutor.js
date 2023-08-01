import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Comuna } from "../models/modelsComuna.js";

const Tutor = sequelize.define('Tutor', {
    codigo_tutor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    rut: {
        type: DataTypes.STRING(15)
    },
    nombre: {
        type: DataTypes.STRING(30)
    },
    apellido_pat: {
        type: DataTypes.STRING(30)
    },
    apellido_mat: {
        type: DataTypes.STRING(30)
    },
    direccion: {
        type: DataTypes.STRING(100)
    },
    cargo: {
        type: DataTypes.STRING(20)
    },
    codigo_comuna: {
        type: DataTypes.INTEGER,
        references: {
            model: Comuna,
            key: 'codigo_comuna'
        }
    }
}, {
    tableName: 'tutor',
    createdAt: false,
    updatedAt: false
});




async function checkTutorData() {
    try {
      const tutor = await Tutor.findAll();
      tutor.forEach((tutor) => {
        console.log(tutor.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener los tutores:", error);
    }
  }
  
  checkTutorData();


export {
    Tutor
}