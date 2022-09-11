const express = require('express');
const cors = require('cors');



class Server {

    constructor() {
        this.app  = express();
        this.port = 3000;

        this.usuariosPath = '/DevOps';
        this.authPath     = '/api/auth';



        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }




    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        
        this.app.use((req, res, next) => {
            if (req.method != 'POST') {
                console.log(req.method);
                res.send(
                    'ERROR'
                );
            } 
            next();
        });
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
