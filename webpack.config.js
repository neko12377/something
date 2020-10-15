const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;
//
// const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve("docs"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "jsx", "css", "scss", "sass"],
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
                ],
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.[jt]sx?$/,
                use: {
                    loader: "eslint-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./index.css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        port: 9527,
    },
};
