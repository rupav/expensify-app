// entry -> output, require is of node thing!
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    console.log('env', env);
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader', // babel-loader uses babel-core itself
                test: /\.js$/, // regular expression between / /, \ is escape as . is deifned in re, $ means files ending with js,
                exclude: /(node_modules)/
            }, {
                test: /\.s?css$/,
                // use: [
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader' // sass-loader uses node-sass in itself
                // ]
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

// // node thing :module
// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader', // babel-loader uses babel-core itself
//             test: /\.js$/, // regular expression between / /, \ is escape as . is deifned in re, $ means files ending with js,
//             exclude: /(node_modules)/
//         }, {
//             test: /\.s?css$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader' // sass-loader uses node-sass in itself
//             ]
//         }]
//     },
//     devtool: ' cheap-module-eval-source-map ',
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),
//         historyApiFallback: true
//     }

// };

// loader
