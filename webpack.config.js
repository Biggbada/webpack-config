const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //ici on declare le plug-in que l'on a installé
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        clean: true
    },
    optimization:{
        minimize : true,
        minimizer:[
            new TerserPlugin({
                parallel: true,
            }),
            new ImageMinimizerPlugin({
                generator: [
                    {
                     type: 'asset',
                     implementation: ImageMinimizerPlugin.imageminGenerate,
                     preset: 'webp',
                     options: {
                        plugins: ["imagemin-webp"]
                     }   
                    }
                ]
            })
            
        ]
    },
    module: {
    rules:[
        {
            test: /\.js$/,              //antislash devant point pour bien dire qu'on cherche un .
            exclude: /node_modules/,
            use:{
                loader: "babel-loader",
            }
        },
        {
            test: /\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }
    ] 
},
plugins:[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
        filename: "style-min.css",
    }),
    new CopyPlugin({
        patterns: [
            {
                from: "./src/assets/images/",
                to: "./assets/imzges/"
            }
        ]
    })
],
devtool: "source-map", //minifie le css mais garde la possibilité d'afficher propre
mode: 'development',
devServer: {
    open: true,  //ouvre le navigateur par défaut
    //watchFiles: ['./src/**'],    //ecoute tout ce qu'il y a dans src
    port: 3000, //pour ne pas mettre 80 comme laragon
    hot: true,   //surveille les maj
    static: {
        directory: path.join(__dirname, 'dist')
    },
    liveReload: true
}

}
