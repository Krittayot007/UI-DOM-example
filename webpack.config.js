const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
    },

    // LOADER 
    module: {
        rules: [
            {
                test: /\.s?css$/i, // เฉพาะกับ .css .scss
                use: ['style-loader', 'css-loader', 'sass-loader'], // ใช้ loader อะไรบ้าง
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },

    // PLUGIN
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: './src/template/index.html',
        }),
    ],
};
