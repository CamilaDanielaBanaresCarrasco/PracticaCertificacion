import { Router } from "express";
import { findAllComuna } from "../controllers/controllersComuna.js";

const routerComuna = Router();

routerComuna.get("/", findAllComuna);

export { routerComuna };