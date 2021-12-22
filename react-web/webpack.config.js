// webpack 을 불러옴. ES6 부터는 import 사용
// var webpack = require('webpack');
import webpack from 'webpack';

module.exports = {
  // entry 파일부터 시작해서 require 불러옴
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
  },

  // 개발 서버 설정
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname + '/public/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['latest', 'react'],
        },
      },
    ],
  },

  // 자동 reload를 위한 hot 모듈 플러그인
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
