// import { index } from '../routes/default.js';

// import { index } from '../routes/rutas'

// const { index } = require('../routes/rutas');

const { login } = require('../controllers/auth');

// const request = require("supertest");

//import { login } from '../routes/auth.js';

describe('Test Handlers', function () {

    test('Validating GET Response Method equals ERROR /', () => {
        const req = { method: 'GET' };

        const res = { text: '',
            send: function(input) { this.text = input } 
        };
        login(req, res);
        // console.log(req);
        // console.log(res);
        
        expect(res.text).toEqual('ERROR');
    });

    test('Validating GET Response Method equals DELETE /', () => {
        const req = { method: 'DELETE' };

        const res = { text: '',
            send: function(input) { this.text = input } 
        };
        login(req, res);
        // console.log(req);
        // console.log(res);
        
        expect(res.text).toEqual('ERROR');
    });
    

});