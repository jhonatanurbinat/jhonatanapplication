
const { Router } = require('express');

const {
    validarJWT
} = require('../middlewares');



const { usuariosPost } = require('../controllers/usuarios');



const router = Router();



router.post('/', [
    validarJWT
], usuariosPost );





module.exports = router;