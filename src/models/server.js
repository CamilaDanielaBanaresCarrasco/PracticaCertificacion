import express from 'express';
import cors from 'cors';

import {routerComuna } from '../routes/routerComuna.js';
import { routerCurso } from '../routes/routerCurso.js';
import { routerEstudiante } from '../routes/routerEstudiante.js';
import {routerEstudiantes} from '../routes/routerEstudiante.js';
import {routerModulo } from '../routes/routerModulo.js';
import {routerPlanFormativo } from '../routes/routerPlanFormativo.js';
import {routerPlanModulo } from '../routes/routerPlanModulo.js';
import { routerRegion} from '../routes/routerRegion.js';






export default class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        //this.app.use(express.urlencoded({extended: true})); web service con formularios, postman url encode
        this.app.use(express.json());
    }


    routes() {
        this.app.use('/routerComuna', routerComuna);
        this.app.use('/routerCurso', routerCurso);
        this.app.use('/routerEstudiante', routerEstudiante);
        this.app.use('/routerEstudiantes', routerEstudiantes);
        this.app.use('/routerModulo', routerModulo);
        this.app.use('/routerPlanFormativo', routerPlanFormativo);
        this.app.use('/routerPlanModulo', routerPlanModulo);
        this.app.use('/routerRegion', routerRegion);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}