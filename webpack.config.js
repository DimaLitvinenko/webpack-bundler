const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    output: {
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.s?[ac]ss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: { publicPath: '' },
                },
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: ['postcss-preset-env'],
                    },
                  },
                },
                'sass-loader',
            ],
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
}