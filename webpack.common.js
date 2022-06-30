/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
/* eslint-disable no-dupe-keys */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-regex-literals */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/public/favicon.png'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/heros/**'],
          },
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Pelipur App',
      short_name: 'Pelipur',
      description: 'Pelipur',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#005555',
      crossorigin: null,
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/favicon.png'),
          sizes: [96, 120, 128, 152, 167, 180, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any maskable',
          destination: path.join('icons', 'icon'),
        },
        {
          src: path.resolve(__dirname, 'src/public/favicon.png'),
          sizes: [180, 192, 512],
          type: 'image/png',
          purpose: 'any maskable',
          destination: path.join('icons', 'ios'),
          ios: true,
        },
      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),

    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),

    // new InjectManifest({
    //   swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    //   swDest: 'sw.js',
    //   maximumFileSizeToCacheInBytes: 5000000,
    // }),

    // new InjectManifest({
    //   swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    //   swDest: 'sw.js',
    //   maximumFileSizeToCacheInBytes: 5000000,
    // }),
    // new GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   runtimeCaching: [
    //     {
    //       urlPattern: new RegExp('http://localhost:5000/#/home'),
    //       handler: 'StaleWhileRevalidate',
    //     },
    //     {
    //       urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/detail/'),
    //       handler: 'NetworkFirst',
    //     },
    //     {
    //       urlPattern: new RegExp('http://localhost:8080/#/about-us'),
    //       handler: 'StaleWhileRevalidate',
    //     },
    //     {
    //       urlPattern: new RegExp('http://localhost:8080/#/bisnis'),
    //       handler: 'StaleWhileRevalidate',
    //     },
    //   ],
    // }),

    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
};
