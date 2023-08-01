import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Plan_Formativo } from "../models/modelsPlanFormativo.js";
import { Modulo } from "../models/modelsModulo.js";

const Plan_Modulo = sequelize.define('Plan_Modulo', {
    codigo_plan_formativo: {
        type: DataTypes.STRING(30),
        primaryKey: true
    },
    codigo_modulo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: 'plan_modulo',
    createdAt: false,
    updatedAt: false
});

// Definir relaciones entre modelos
Plan_Modulo.belongsTo(Plan_Formativo, { foreignKey: 'codigo_plan_formativo' });
Plan_Modulo.belongsTo(Modulo, { foreignKey: 'codigo_modulo' });



async function checkPlanModuloData() {
    try {
      const planesModulo = await Plan_Modulo.findAll();
      planesModulo.forEach((planModulo) => {
        console.log(planModulo.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener los planes módulo:", error);
    }
  }
  
  checkPlanModuloData();



export {
    Plan_Modulo
}