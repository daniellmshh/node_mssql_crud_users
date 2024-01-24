// Función para manejar el resultado de los procedimientos almacenados
const handleProcedureResult = (res, result) => {
    const { success, error, msg } = result;
    if (error) {
        res.status(400).json({ success: false, error, msg });
    } else {
        res.status(200).json({ success, error, msg });
    }
};

// Función para manejar errores
const handleError = (res, error) => {
    res.status(500).json({
        success: false,
        error: 1,
        msg: `Error inesperado, contacte a soporte. ${ error }`
    });
};

// Exportamos las funciones para manejo de errores
module.exports = {
    handleProcedureResult,
    handleError
}