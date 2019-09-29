const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './fetch.js',
    output: {
        path: path.join(__dirname, 'dist'), // crea una carpeta dist al lado de src
        filename: 'bundle.js'
    },
    devServer: { 
        port: 3000
    },
    module: { 
        rules:[
           {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
           } 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}