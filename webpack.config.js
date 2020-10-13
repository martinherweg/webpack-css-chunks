const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
      app: './src/app.js',
      test: './src/test.css',
    },
    mode: 'production',
    optimization: {
      removeEmptyChunks: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
  }
