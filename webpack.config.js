var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./index.js",
    context: __dirname + '/app',
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html', to: 'dist' }
        ])
    ],
    module: {
        loaders: [
            { test: /\.js/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
