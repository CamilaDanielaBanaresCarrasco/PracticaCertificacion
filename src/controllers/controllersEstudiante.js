import { Estudiante } from "../models/modelsEstudiante.js";
import {Comuna} from "../models/modelsComuna.js"
import {Region} from "../models/modelsRegion.js"
import {Curso} from "../models/modelsCurso.js"
import { Plan_Formativo } from "../models/modelsPlanFormativo.js"; 

const findAllEstudiante = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    console.error("Error al obtener los estudiantes:", error);
    res.status(500).json({ message: "Error al obtener los estudiantes" });
  }
};


const filtrarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll({
      attributes: ['rut', 'nombre', 'apellido_pat', 'apellido_mat', 'codigo_curso'],
      include: [
        {
          model: Comuna,
          include: [
            {
              model: Region,
            },
          ],
        },
        {
          model: Curso,
          include: [
            {
              model: Plan_Formativo,
              attributes: ['descripcion'],
            },
          ],
        },
      ],
      order: [
        [Comuna, Region, 'nombre', 'ASC'],
        ['apellido_pat', 'ASC'],
        ['apellido_mat', 'ASC']
      ]
    });
    res.json(estudiantes);
  } catch (error) {
    console.error("Error al filtrar los estudiantes:", error);
    res.status(500).json({ message: "Error al filtrar los estudiantes" });
  }
};



export { findAllEstudiante,
  filtrarEstudiantes };