const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //ici on declare le plug-in que l'on a installé

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
    rules:[
        {
            test: /\.js$/,              //antislash devant point pour bien dire qu'on cherche un .
            exclude: /node_modules/,
            use:{
                loader: "babel-loader",
            }
        }
    ] 
},
plugins:[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
    })
]
}
