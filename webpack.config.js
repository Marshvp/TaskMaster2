const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name] [contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss)$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                        postcssOptions: {
                            plugins: [
                            autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }            
                ]
            },
            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
        
                type: 'asset/resource',
        
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TaskMaster',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
}