import { Region } from "../models/modelsRegion.js";

const findAllRegion = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.json(regions);
  } catch (error) {
    console.error("Error al obtener las regiones:", error);
    res.status(500).json({ message: "Error al obtener las regiones" });
  }
};

export { findAllRegion };