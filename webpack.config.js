const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //ici on declare le plug-in que l'on a installé

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        clean: true
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
],
devtool: "source-map", //minifie le css mais garde la possibilité d'afficher propre
mode: 'development',
devServer: {
    open: true,  //ouvre le navigateur par défaut
    //watchFiles: ['./src/**'],    //ecoute tout ce qu'il y a dans src
    port: 3000, //pour ne pas mettre 80 comme laragon
    hot: true,   //surveille les maj
    static: ".dist/",
    liveReload: true
}

}
