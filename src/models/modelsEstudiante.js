import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Comuna } from "../models/modelsComuna.js"; 
import { Curso } from "../models/modelsCurso.js"; 

const Estudiante = sequelize.define('Estudiante', {
    id_estudiante: {
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
    codigo_comuna: {
        type: DataTypes.INTEGER,
        references: {
            model: Comuna,
            key: 'codigo_comuna'
        }
    },
    codigo_curso: {
        type: DataTypes.STRING(30),
        references: {
            model: Curso,
            key: 'codigo_curso'
        }
    }
}, {
    tableName: 'estudiante',
    createdAt: false,
    updatedAt: false
});




async function checkEstudianteData() {
    try {
      const estudiantes = await Estudiante.findAll();
      estudiantes.forEach((estudiante) => {
        console.log(estudiante.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener los estudiantes:", error);
    }
  }
  




  checkEstudianteData();

export {
    Estudiante
}