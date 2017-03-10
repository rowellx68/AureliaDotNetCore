var isDevBuild = process.argv.indexOf("--env.prod") < 0;
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin("vendor.css");

var devPlugins = [];
var prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })  
];

module.exports = {
    resolve: {
        extensions: [ ".js" ]
    },
    module: {
        rules: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: "url-loader?limit=100000" },
            { test: /\.css(\?|$)/, loader: extractCSS.extract(["css-loader"]) }
        ]
    },
    entry: {
        vendor: [
            "aurelia-framework",
            "aurelia-router",
            "bootstrap/dist/css/bootstrap.css",
            "font-awesome/css/font-awesome.css"
        ],
    },
    output: {
        path: path.join(__dirname, "wwwroot", "dist"),
        publicPath: "/dist/",
        filename: "[name].js",
        library: "[name]_[hash]",
    },
    plugins: [
        extractCSS,
        new webpack.DllPlugin({
            path: path.join(__dirname, "wwwroot", "dist", "[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ].concat(isDevBuild ? devPlugins : prodPlugins)
};
