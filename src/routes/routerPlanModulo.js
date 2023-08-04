import { Router } from "express";
import { findAllPlanModulo } from "../controllers/controllersPlanModulo.js";

const routerPlanModulo = Router();

routerPlanModulo.get("/", findAllPlanModulo);

export { routerPlanModulo };