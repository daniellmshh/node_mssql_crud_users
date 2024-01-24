// Modulos
const express = require('express');
const cors = require('cors');
const { testConnection } = require('../database/connection');

// Clase que representa un servidor basado en express
class Server {

    // Crea una instancia del servidor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.pathUsers = '/api/users';

        // Inicializa los middlewares y las rutas al crear una instancia del servidor
        this.middlewares();
        this.routes();

        testConnection();
    };

    // Configura y aplica los middlewares de la aplicacion
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    };

    // Define las rutas de la aplicacion
    routes(){

        // Ruta predeterminada para la URL raiz
        this.app.get('/', (req, res) => {
            res.send('¡Bienvenido al servidor!');
        });

        // Ruta para usuarios
        this.app.use(this.pathUsers, require('../routes/users'));

         // Manejador de errores global
         this.app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        });
    };

    // Inicia el servidor y escucha las conexiones entrantes
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor inicializado en: ' , this.port);
        });
    };
};

// Exporta la clase Serer para su uso en otros archivos
module.exports = Server;