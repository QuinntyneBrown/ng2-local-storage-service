module.exports = {
    entry: {
        'polyfills': './src/demo-app/polyfills.ts',
        'vendor': './src/demo-app/vendor.ts',
        'app': './src/demo-app/main.ts'
    },
    output: {
        path: "./prod",
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loaders: ["css"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web,js', '.ts', '.js']
    }
}
