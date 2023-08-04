import { Router } from "express";
import { findAllPlanFormativo } from "../controllers/controllersPlanFormativo.js";

const routerPlanFormativo = Router();

routerPlanFormativo.get("/", findAllPlanFormativo);

export { routerPlanFormativo };