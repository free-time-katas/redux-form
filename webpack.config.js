module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        app: ['./src/index.jsx']
    },
    output: {
        filename: '[name].js',
        path: './build',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel',
                exclude: /node_module/
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        inline: true,
        historyApiFallback: true
    }
};