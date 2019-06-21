const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
webpack = require("webpack");



module.exports = {
  entry: './src/index.js', //главный файл куда импортиться
  output: {
    filename: 'my.js',
    path: path.resolve(__dirname, 'build') // конечная папка build 
    
  },
  optimization: {
    minimizer: [
        new OptimizeCssAssetsPlugin({}), // минификация css
        new UglifyJsPlugin() //минификация js (не работает нативно с ES6)
    ]
},

  devServer: { // запустили сервер
    compress: true,
    port: 4200
  },

  module: {
    rules: [
      {
      test: /\.html$/,     //html
      use: [{
        loader: 'html-loader',
        options: {
          minimize: false
        }
      }],

    },
    {
      test: /\.(png|jpg)$/,   // ???
      loader: 'url-loader'
    },
    // {
    //   test: /\.(png|jpg|gif)$/, // ???
    //   use: [ 
    //     {
    //       loader: 'file-loader',
    //       options: {},
    //     }
    //   ]
    // },
    {
      test: /\.css$/,     //css
      use: [MiniCssExtractPlugin.loader,
        'css-loader'],
    },
    
    {
      test: /\.(scss)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader, // inject CSS to page
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              // require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }],

    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    


    ]
  },


  plugins: [
    new htmlWebpackPlugin({      
    template: "./src/index.html"
  }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      axios: 'axios'
    })
    
]

};
