const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

exports.buildPlugs = (mode) => {
    let filename_ = '';
    if(mode){
        filename_ = "./css/[name].[fullhash].min.css";
    }else{
        filename_ = "./css/[name].min.css";
    }

    return  [
        new HtmlWebpackPlugin({
            template: './assets/templates/template.html',
            filename: "index.html",
            title: 'Custom template',
            inject: 'head',
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                'theme-color': '#4285f4'
                // Will generate: <meta name="theme-color" content="#4285f4">
            }

        }),
        new CopyPlugin({
            patterns:[
                {from: './assets/templates/countries.json', to:path.resolve(__dirname,'../public') },
                {from: './assets/templates/favicon.ico', to:path.resolve(__dirname,'../public') },
            ]
        }),

        new MiniCssExtractPlugin({
            filename: filename_
        }),
    ]
}
