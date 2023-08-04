import { Comuna } from "../models/modelsComuna.js";

const findAllComuna = async (req, res) => {
  try {
    const comunas = await Comuna.findAll();
    res.json(comunas);
  } catch (error) {
    console.error("Error al obtener las comunas:", error);
    res.status(500).json({ message: "Error al obtener las comunas" });
  }
};

export { findAllComuna };