import 'dotenv/config';// llamo a env para poder tener acceso a las variables de entorno
import Server from './src/models/server.js'; // llamo al server para obtener las config 
import './src/models/relations.js'; //llamo al relations para ajustar las relaciones


const server = new Server();  

server.listen();  // inicio el servidor