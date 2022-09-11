const jwt = require('jsonwebtoken');



const generarJWT = () => {

    return new Promise( (resolve, reject) => {

        // const payload = { uid };

        const payload = {
            id: 1,
            nombre : "Jhonatan",
            email: "jhonatanurbinat@email.com"
        }

        jwt.sign( payload, 'secretkey' , {
            expiresIn: '20 days'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}




module.exports = {
    generarJWT
}

