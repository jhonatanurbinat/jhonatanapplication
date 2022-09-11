// import { index } from '../routes/default.js';

// import { index } from '../routes/rutas'

const { index } = require('../routes/rutas');


//import { login } from '../routes/auth.js';

describe('Test Handlers', function () {

    test('responds to /', () => {
        const req = {  };

        const res = { text: '',
            send: function(input) { this.text = input } 
        };
        index(req, res);
        //expect(true).toEqual(true);
        expect(res.text).toEqual('hello world!');
    });


});