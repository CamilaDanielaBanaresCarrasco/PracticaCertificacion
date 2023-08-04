import { Modulo } from "../models/modelsModulo.js";

const findAllModulo = async (req, res) => {
  try {
    const modulos = await Modulo.findAll();
    res.json(modulos);
  } catch (error) {
    console.error("Error al obtener los módulos:", error);
    res.status(500).json({ message: "Error al obtener los módulos" });
  }
};

export { findAllModulo };