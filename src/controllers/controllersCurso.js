import { Curso } from "../models/modelsCurso.js";

const findAllCurso = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    console.error("Error al obtener los cursos:", error);
    res.status(500).json({ message: "Error al obtener los cursos" });
  }
};

export { findAllCurso };