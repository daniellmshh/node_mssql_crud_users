const { Router } = require('express');

// Funciones 
const {
    getUser,
    listUsers,
    createUser,
    updateUser,
    changeStatusUser
} = require('../controllers/users/users');

// Instancia de Router
const router = Router();

// Configuracion de endpoints
router.get('/:userId', getUser);
router.get('/', listUsers);
router.post('/', createUser);
router.put('/us', updateUser);
router.delete('/', changeStatusUser);

// Exportamos nuestro router
module.exports = router;