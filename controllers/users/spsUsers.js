const sql = require('mssql')

// Definicion de procedimientos almacenados
const procedures = {
   spUserCreate: 'sp_UserCreate',
   spUserGet: 'sp_UserGet',
   spUsersToList: 'sp_UsersToList',
   spChangeStatus: 'sp_UserChangeStatus'
};

// Definicion de parametros para procedimientos almacenados
const parameters = {
    userCreate: (user) => [
        { name: 'user_type_id', type: sql.Int, value: user.userTypeId },
        { name: 'first_name', type: sql.Varchar, value: user.firstName },
        { name: 'second_name', type: sql.Varchar, value: user.secondName },
        { name: 'last_name', type: sql.Varchar, value: user.lastName },
        { name: 'second_last_name', type: sql.Varchar, value: user.secondLastName},
        { name: 'email', type: sql.Varchar, value: user.email },
        { name: 'phone_number', type: sql.Varchar, valuer: user.phoneNumber },
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
        { name: 'user_id', type: sql.Int, value: user.user.userId },
        { name: 'user_type_id', type: sql.Int, value: user.userTypeId },
        { name: 'first_name', type: sql.Varchar, value: user.firstName },
        { name: 'second_name', type: sql.Varchar, value: user.secondName },
        { name: 'last_name', type: sql.Varchar, value: user.lastName },
        { name: 'second_last_name', type: sql.Varchar, value: user.secondLastName },
        { name: 'email', type: sql.Varchar, value: user.email },
        { name: 'phone_number', type: sql.Varchar, value: user.phoneNumber },
        { name: 'modification_user_id', type: sql.Int, value: user.modificationUserId }
    ],
    userChangeStatus: (user) => [
        { name: 'user_id', type: sql.Int, value: user.userId },
        { name: 'modification_user_id', type: sql.Int, value: user.modificationUserId },
        { name: 'comments', type: sql.Varchar, value: user.comments }
    ]
};

module.exports = {
    procedures,
    parameters
};