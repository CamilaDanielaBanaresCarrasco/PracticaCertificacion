import { Tutor } from "../models/modelTutor.js";

const findAllTutor = async (req, res) => {
  try {
    const tutors = await Tutor.findAll();
    res.json(tutors);
  } catch (error) {
    console.error("Error al obtener los tutores:", error);
    res.status(500).json({ message: "Error al obtener los tutores" });
  }
};

export { findAllTutor };