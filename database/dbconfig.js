// Objeto de configuración para nuestra db
const config_db = {  
    server: process.env.SSQL_SERVER,  
    database: process.env.MSSQL_DB,
    authentication: {
        type: 'default',
        options: {
            userName:  process.env.MSSQL_USER_PROD, 
            password:  process.env.MSSQL_PASSWORD_PROD
        }
    },
    options: {
        encrypt: false,
        enableArithAbort: true,
        ssl: false
    }
};

// Exporta el objeto config para su uso en otros archivos
module.exports = {
    config_db
};