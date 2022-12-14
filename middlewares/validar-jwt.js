const { response, request } = require('express');
const jwt = require('jsonwebtoken');




const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-jwt-kwy');

    

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { payload } = jwt.verify( token, 'secretkey' );
       
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}




module.exports = {
    validarJWT
}