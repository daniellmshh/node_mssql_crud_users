// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Importa la clase Server desde el modulo correspondiente
const Server = require('./models/server');

// Crea una nueva instancia de la clase Server
const server = new Server;

// Inicia el servidor y comienza a escuchar las conexiones entrantes
server.listen();