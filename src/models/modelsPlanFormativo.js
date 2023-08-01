import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Plan_Formativo = sequelize.define('Plan_Formativo', {
    codigo_plan_formativo: {
        type: DataTypes.STRING(30),
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(250)
    },
    duracion_horas: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'plan_formativo',
    createdAt: false,
    updatedAt: false
});


async function checkPlanFormativeData() {
    try {
      const planesFormativos = await Plan_Formativo.findAll();
      planesFormativos.forEach((planFormativo) => {
        console.log(planFormativo.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener los planes formativos:", error);
    }
  }
  
  checkPlanFormativeData();

export {
    Plan_Formativo
}