var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: {
        main: './index.web.js',
    },
    node: {
        __dirname: true
    },

    module: {
        loaders: [

            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime'],
                    presets:  ['es2015', 'stage-0', 'react'],
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-=&.]+)?$/,
                loader : 'file-loader',
                include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader"},
        ],
    },
    resolve: {
        alias: {
            'react-native': 'react-native-web',
        },
    },
    devServer: {
        historyApiFallback: true,
        inline:true,
        port: 9000
    },
};