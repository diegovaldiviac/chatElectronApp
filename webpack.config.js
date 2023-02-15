const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV || "development",
  devtool: "inline-source-map",
  target: "electron-renderer",
  devServer: {
    static: {       
      directory: path.resolve(__dirname, './dist')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
    }),
],
  resolve: {
    extensions: [".tsx", ".js", ".ts", ".jsx", ""],
  },
  output: {
    filename: "app.ts",
    path: path.resolve(__dirname, "build"),
  },
};
