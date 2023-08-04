import { Router } from "express";
import { findAllCurso } from "../controllers/controllersCurso.js";

const routerCurso = Router();

routerCurso.get("/", findAllCurso);

export { routerCurso };