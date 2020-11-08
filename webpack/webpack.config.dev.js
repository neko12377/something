const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const chalk = require("chalk");

const config = {
    mode: "development",
    context: path.resolve("src"),
    entry: {
        index: "./index.tsx",
    },
    output: {
        path: path.resolve("dist"),
        // publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-typescript",
                            ],
                            plugins: ["babel-plugin-styled-components"],
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
                exclude: /[\\/]node_modules[\\/]/,
            },
        ],
    },
    devtool: "inline-source-map",
    devServer: {
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_module[\\/]/,
                    priority: 10,
                    chunks: "all",
                    minSize: 0,
                    minChunks: 2,
                },
            },
        },
    },
};

module.exports = config;
console.log(chalk.hex("#61dbb3").bold("Starting"));
