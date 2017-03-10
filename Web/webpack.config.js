﻿var isDevBuild = process.argv.indexOf("--ennv.prod") < 0;
var path = require("path");
var webpack = require("webpack");
var AureliaWebpackPlugin = require("aurelia-webpack-plugin");

var bundleOutputDir = "./wwwroot/dist";
var devPlugins = [
    new webpack.SourceMapDevToolPlugin({
        filename: "[file].map",
        moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]")
    })
];
var prodPlugins = [
    new webpack.optimize.UglifyJsPlugin()
];

module.exports = {
    resolve: { extensions: [".js", ".ts"] },
    entry: { "app": "aurelia-bootstrapper-webpack" },
    output: {
        path: path.join(__dirname, "wwwroot", "dist"),
        publicPath: "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.ts$/, include: /App/, loader: "ts-loader", query: { silent: true } },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.scss$/, loaders: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=100000" },
            { test: /\.json$/, loader: "json-loader" }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ IS_DEV_BUILD: JSON.stringify(isDevBuild) }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./wwwroot/dist/vendor-manifest.json")
        }),
        new AureliaWebpackPlugin({
            root: path.resolve("./"),
            src: path.resolve("./App"),
            baseUrl: "/"
        })
    ].concat(isDevBuild ? devPlugins : prodPlugins)
};