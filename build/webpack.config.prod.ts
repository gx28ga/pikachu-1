import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const config = {
  mode: "production",
  entry: {
    app: {
      import: [path.resolve(__dirname, "../src/main.ts")],
    },
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",

          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
};
export default config;
