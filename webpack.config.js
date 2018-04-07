// entry -> output, require is of node thing!
const path = require('path');


// node thing :module
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', // babel-loader uses babel-core itself
            test: /\.js$/, // regular expression between / /, \ is escape as . is deifned in re, $ means files ending with js,
            exclude: /(node_modules)/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader' // sass-loader uses node-sass in itself
            ]
        }]
    },
    devtool: ' cheap-module-eval-source-map ',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};

// loader
