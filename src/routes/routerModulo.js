import { Router } from "express";
import { findAllModulo } from "../controllers/controllersModulo.js";

const routerModulo = Router();

routerModulo.get("/", findAllModulo);

export { routerModulo };