const { response } = require('express');
const { executeStoreProc } = require('../../database/connection');
const { procedures, parameters } = require('./spsUsers');
const { handleError, handleProcedureResult } = require('../../helpers/errorHandling');

// Función para obtener información de un usuario
const getUser = async (req, res = response) => {
    try {
        const userId = req.params.userId;
        const result = await executeStoreProc(procedures.userGet, parameters.userGet(userId));
        return res.status(200).json({ records: result });
    } catch (error) {
        handleError(res, error);
    };
};

// Función para listar usuarios por pagina
const listUsers = async (req, res = response) => {
    try {
        const { page, start, limit } = req.query;
        const result = await executeStoreProc(procedures.usersToList, parameters.usersToList(page, start, limit), 1);
        return res.status(200).json({ records: result });  
    } catch (error) {
        handleError(res, error);
    };
};

// Función para crear un usuario
const createUser = async (req, res = response) => {
    try {
        const user = req.body;
        const result = await executeStoreProc(procedures.userCreate, parameters.userCreate(user));
        handleProcedureResult(res,result)
    } catch (error) {
        handleError(res,error);
    };
};

// Función para editar un usuario
const updateUser = async (req, res = response) => {
    try {
        const user = req.body;
        const result = await executeStoreProc(procedures.userUpdate, parameters.userUpdate(user));
        handleProcedureResult(res,result);
    } catch (error) {
        handleError(res,error);
    };
};

// Función para cambiar estatus de un usuario
const changeStatusUser = async (req, res = response) => {
    try {
        const user = req.body;
        const result = await executeStoreProc(procedures.userChangeStatus, parameters.userChangeStatus(user));
        handleProcedureResult(res, result);
    } catch (error) {
        handleError(res, error);
    };
};

// Exportamos las funciones
module.exports = {
    getUser,
    listUsers,
    createUser,
    updateUser,
    changeStatusUser
};