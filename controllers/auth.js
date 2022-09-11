const { response } = require('express');




const { generarJWT } = require('../helpers/generar-jwt.js');


const login = async(req, res = response) => {

    const { method } = req;
    

    try {
      
        
        if ( method != 'POST' ) {
            return  res.send(
                'ERROR'
            );
        }


        // Generar el JWT
        const token = await generarJWT( );

        res.json({
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   

}



module.exports = {
    login
}
