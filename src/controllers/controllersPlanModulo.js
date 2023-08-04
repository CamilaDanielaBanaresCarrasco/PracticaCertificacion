import { Plan_Modulo } from "../models/modelsPlanModulo.js";



const findAllPlanModulo = async (req, res) => {
    try {
      const planesModulo = await Plan_Modulo.findAll();
      res.json(planesModulo);
    } catch (error) {
      console.error("Error al obtener los planes módulo:", error);
      res.status(500).json({ message: "Error al obtener los planes módulo" });
    }
  };
  
  export { findAllPlanModulo };