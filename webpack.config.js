const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    target: 'electron-renderer',
    entry: {
        app: [path.join(__dirname, 'src/main.jsx')]
    },
    output: {
        filename: 'app.bundle.js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
