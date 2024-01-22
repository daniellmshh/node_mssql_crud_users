// Modulos
const express = require('express');
const cors = require('cors');

// Clase que representa un servidor basado en express
class Server {

    // Crea una instancia del servidor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Inicializa los middlewares y las rutas al crear una instancia del servidor
        this.middlewares();
        this.routes();
    };

    // Conigura y aplica los middlewares de la aplicacion
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