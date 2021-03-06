
const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //Middlewares//primero coloco los midd xq si coloco las rutas no entran los midd 
        this.middlewares();

        this.routes();
    }



    middlewares() {

        //uso de CORS
        this.app.use( cors());

        //información serializada a JSON
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }


    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}



module.exports = Server;