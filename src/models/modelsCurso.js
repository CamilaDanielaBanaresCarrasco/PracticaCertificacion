import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Comuna } from "../models/modelsComuna.js"; 
import { Plan_Formativo } from "../models/modelsPlanFormativo.js"; 
const Curso = sequelize.define('Curso', {
    codigo_curso: {
        type: DataTypes.STRING(30),
        primaryKey: true
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_termno: {
        type: DataTypes.DATE
    },
    codigo_comuna: {
        type: DataTypes.INTEGER,
        references: {
            model: Comuna,
            key: 'codigo_comuna'
        }
    },
    codigo_plan_formativo: {
        type: DataTypes.STRING(30),
        references: {
            model: Plan_Formativo,
            key: 'codigo_plan_formativo'
        }
    }
}, {
    tableName: 'curso',
    createdAt: false,
    updatedAt: false
});


async function checkCursoData() {
    try {
      const cursos = await Curso.findAll();
      cursos.forEach((curso) => {
        console.log(curso.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  }
  
  checkCursoData();

export {
    Curso
}