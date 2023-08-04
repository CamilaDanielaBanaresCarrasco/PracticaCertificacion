import { Router } from "express";
import { findAllRegion } from "../controllers/controllersRegion.js";

const routerRegion = Router();

routerRegion.get("/", findAllRegion);

export { routerRegion };