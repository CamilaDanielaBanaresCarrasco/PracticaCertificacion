import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Curso } from "../models/modelsCurso.js";
import { Modulo } from "../models/modelsModulo.js"; 
import { Tutor } from "../models/modelTutor.js"; 

const Curso_Modulo_Tutor = sequelize.define('Curso_Modulo_Tutor', {
    codigo_curso: {
        type: DataTypes.STRING(30),
        primaryKey: true
    },
    codigo_modulo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    codigo_tutor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'curso_modulo_tutor',
    createdAt: false,
    updatedAt: false
});

// Definir relaciones entre modelos
Curso_Modulo_Tutor.belongsTo(Curso, { foreignKey: 'codigo_curso' });
Curso_Modulo_Tutor.belongsTo(Modulo, { foreignKey: 'codigo_modulo' });
Curso_Modulo_Tutor.belongsTo(Tutor, { foreignKey: 'codigo_tutor' });



async function checkCursoModuloTutorData() {
    try {
      const cursosModulosTutores = await Curso_Modulo_Tutor.findAll();
      cursosModulosTutores.forEach((cursoModuloTutor) => {
        console.log(cursoModuloTutor.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener los cursos módulos tutores:", error);
    }
  }
  
  checkCursoModuloTutorData();


export {
    Curso_Modulo_Tutor
}