import { Router } from "express";
import { findAllEstudiante } from "../controllers/controllersEstudiante.js";
import { filtrarEstudiantes } from "../controllers/controllersEstudiante.js";

const routerEstudiante = Router();
const routerEstudiantes = Router();

routerEstudiante.get("/", findAllEstudiante);
routerEstudiantes.get('/filtrar', filtrarEstudiantes);

export { routerEstudiante, routerEstudiantes };