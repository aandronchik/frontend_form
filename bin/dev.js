const webpack = require('webpack')
const webpack_config = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const compiler = webpack(webpack_config)


compiler.run((err) => {
    if (err) {
        console.log(`compilation failed:`, err);
    }
    compiler.watch({}, (err) => {
        if (err) {
            console.log(`compilation failed:`, err);
        }
        console.log('Compilation was successfully');
    });
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client')
        ]
    })
});