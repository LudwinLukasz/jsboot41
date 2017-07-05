//webpack.config.js
const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
       // path: '/luk/JS_bootcamp/JSboot41/build',
        path: path.resolve(__dirname,'build'),
        filename: 'app.bundle.js'
    }
};