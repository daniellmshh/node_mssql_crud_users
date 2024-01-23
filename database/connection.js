const sql = require('mssql');
const { config_db } = require('./dbconfig');

// Configuracion de pool de conexiones
const poolConfig = {
    max: 100,
    min: 0,
    idleTimeoutMillis: 3000
};

// Crear el pool de conexiones
const pool = new sql.ConnectionPool({ ...config_db, ...poolConfig });

// Funcion para conectar al pool
const funGetConnection = async () => {
    console.log('llego al conect');
    try {
        if (!pool.connected) {
            await pool.connect();
        }
        return pool;
    } catch (err) {
        console.error('Error al conectar al pool: ', err);
        throw err;
    };
};

// Funcion para probar la coneccion a la base de datos
const testConnection = async () => {
    console.log('ejecuto el test');
    try {
        const pool = await funGetConnection();
        const result = await pool.request().query('SELECT 1 AS TestQuery');
        console.log('el resultado es: ', result);
        return result.recordset[0].TestQuery === 1;
    } catch (error) {
        console.error('Error al probar la conexión:', error);
        return false;
    }
};


// Funcion para cerrar el pool
const closePool = async () => {
    try {
        await pool.close();
        console.log('Pool cerrado correctamente');
    } catch (err) {
        console.error('Error al cerrar el pool: ', err);
    }
};

// Capturar eventos de terminación de la aplicación y cerrar el pool
process.on('SIGINT', async () => {
    await closePool();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await closePool();
    process.exit(0);
});

// Exportacion de funciones para manejo de conexion y pools
module.exports = {
    funGetConnection,
    closePool,
    testConnection
};