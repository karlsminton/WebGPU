import path from 'node:path';

export default [
    {
        name: 'client',
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        output: {
            filename: "index.js",
            path: path.resolve(path.resolve(), "dist"),
        },
    },
    {
        name: 'server',
        entry: './server.ts',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        externalsPresets: { node: true },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        output: {
            filename: "server.js",
            path: path.resolve(),
        },
    }
];
