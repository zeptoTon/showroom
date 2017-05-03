
var path = require('path');

const config = {
    devtool: 'cheap-module-source-map',
    entry: {
        index: './src/client/App.tsx'
    },
    /**
     * Override tsconfig.json
     */
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
        sourceMapFilename: '[name].map'
    },
    resolve: {
        // add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', 'json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                    },
                ],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }

        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;

