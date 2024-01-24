const sql = require('mssql')

// Definición de procedimientos almacenados
const procedures = {
   userCreate: 'sp_UserCreate',
   userUpdate: 'sp_UserUpdate',
   userGet: 'sp_UserGet',
   usersToList: 'sp_UsersToList',
   userChangeStatus: 'sp_UserChangeStatus'
};

// Definición de parametros para procedimientos almacenados
const parameters = {
    userCreate: (user) => [
        { name: 'first_name', type: sql.VarChar, value: user.firstName },
        { name: 'second_name', type: sql.VarChar, value: user.secondName },
        { name: 'last_name', type: sql.VarChar, value: user.lastName },
        { name: 'second_last_name', type: sql.VarChar, value: user.secondLastName},
        { name: 'email', type: sql.VarChar, value: user.email },
        { name: 'phone_number', type: sql.VarChar, value: user.phoneNumber },
        { name: 'modification_user_id', type: sql.Int, value: user.modificationUserId }
    ],
    userGet: (userId) => [
        { name: 'user_id', type: sql.Int, value: userId}
    ],
    usersToList: (page, start, limit) => [
        { name: 'page', type: sql.Int, value: page },
        { name: 'start', type: sql.Int, value: start },
        { name: 'limit', type: sql.Int, value: limit }
    ],
    userUpdate:(user) => [
        { name: 'user_id', type: sql.Int, value: user.userId },
        { name: 'first_name', type: sql.VarChar, value: user.firstName },
        { name: 'second_name', type: sql.VarChar, value: user.secondName },
        { name: 'last_name', type: sql.VarChar, value: user.lastName },
        { name: 'second_last_name', type: sql.VarChar, value: user.secondLastName },
        { name: 'email', type: sql.VarChar, value: user.email },
        { name: 'phone_number', type: sql.VarChar, value: user.phoneNumber },
        { name: 'modification_user_id', type: sql.Int, value: user.modificationUserId }
    ],
    userChangeStatus: (user) => [
        { name: 'user_id', type: sql.Int, value: user.userId },
        { name: 'modification_user_id', type: sql.Int, value: user.modificationUserId },
        { name: 'comments', type: sql.VarChar, value: user.comments }
    ]
};

// Exportamos nuestros objetos
module.exports = {
    procedures,
    parameters
};