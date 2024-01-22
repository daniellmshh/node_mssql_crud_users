// Objeto de configuracion para nuestra db
const config_db = {  
    server: `34.70.72.199`,  
    database: 'crud',
    authentication: {
        type: 'default',
        options: {
            userName:  'sqlserver', 
            password:  'jimudev'
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