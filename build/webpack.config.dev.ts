import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

const config = {
  mode: "development",
  entry: {
    app: {
      import: [path.resolve(__dirname, "../src/main.ts")],
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
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
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 8888,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
    }),
  ],
};
export default config;
