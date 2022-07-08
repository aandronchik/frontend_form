const path = require('path');
const node_externals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;


module.exports = {
    target: 'node',
    resolve: {
        extensions: ['.js', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    externals: [node_externals()],
    module: {
        rules: [{
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            // onlyLocals: true
                        }

                    },
                    'less-loader',
                ]
            }
        ]
    },
    optimization: {
        minimize: false
    }
}