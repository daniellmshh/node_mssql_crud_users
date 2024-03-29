const sql = require('mssql');
const { config_db } = require('./dbconfig');

// Configuración de pool de conexiones
const poolConfig = {
    max: 100,
    min: 0,
    idleTimeoutMillis: 3000
};

// Crear el pool de conexiones
const pool = new sql.ConnectionPool({ ...config_db, ...poolConfig });

// Función para conectar al pool
const getConnection = async () => {
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

// Funcion para probar la conexión a la base de datos
const testConnection = async () => {
    console.log('ejecuto el test');
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT 1 AS TestQuery');
        console.log('el resultado es: ', result);
        return result.recordset[0].TestQuery === 1;
    } catch (error) {
        console.error('Error al probar la conexión:', error);
        return false;
    }
};

// Función para ejecutar procedimientos almacenados con parametos
const executeStoreProc = async (procName, parameters, list = 0) => {
    try {
        const pool = await getConnection();
        const request = pool.request();
        parameters.forEach(param => request.input(param.name, param.type, param.value)); 
        const result = await request.execute(procName);
        resultReturn = list !== 0 ? result.recordset : result.recordset[0];
        return resultReturn
    } catch (error) {
        throw error;
    };
};

// Función para cerrar el pool
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

// Exportación de funciones para manejo de conexión y pools
module.exports = {
    getConnection,
    closePool,
    testConnection,
    sql,
    executeStoreProc
};