import { Plan_Formativo } from "../models/modelsPlanFormativo.js";

const findAllPlanFormativo = async (req, res) => {
  try {
    const planesFormativos = await Plan_Formativo.findAll();
    res.json(planesFormativos);
  } catch (error) {
    console.error("Error al obtener los planes formativos:", error);
    res.status(500).json({ message: "Error al obtener los planes formativos" });
  }
};

export { findAllPlanFormativo };