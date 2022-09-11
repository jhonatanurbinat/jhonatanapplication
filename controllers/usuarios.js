const { response, request } = require('express');





const usuariosPost = async(req, res = response) => {
    
    const { to } = req.body;
    
    // Encriptar la contraseña
    
    
    res.json({
        mensaje: `Hello ${ to } your message will be send`,
    });
}





module.exports = {
    
    usuariosPost
}