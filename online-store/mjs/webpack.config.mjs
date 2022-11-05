import { resolve } from 'path'
import { merge } from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
//import { CopyWebpackPlugin } from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const baseConfig = {
  entry: resolve(process.cwd(), 'src', 'index.ts'),
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.[tj]s$/i,
        use: 'ts-loader',
        exclude: /(node_modules|tests)/,
      },
      {
        test: /\.(png|jpg|gif|svg)/i,
        type: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },
  output: {
    filename: 'index.js',
    path: resolve(process.cwd(), '..', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), 'src', 'index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'global.css',
    }),
  ],
}

async function getConfiguration({ mode }) {
  const isProductionMode = mode === 'prod'
  const envConfig = isProductionMode
    ? await import('./webpack.prod.config.mjs')
    : await import('./webpack.dev.config.mjs')
  return merge(baseConfig, envConfig)
}

const config = await getConfiguration(process.env)

export { config }
