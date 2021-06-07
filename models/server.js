const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.authPath = '/api/auth';

        //DB Connection
        this.DBConnection();

        // Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async DBConnection() {
        await dbConnection();
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
        this.app.use(this.authPath, require('../routes/auth'));
    }

    start() {
        this.app.listen(this.port);
    }

}

module.exports = Server;