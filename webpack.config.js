const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry es el punto de entrada de nuestro proyecto, esta es la ubicacion del archivo principal.
  entry: './src/index.js',
  // es donde se compila todo el proyecto, el resultado de la preparacion con webpack.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'/'
  },
  // se ponen las extensiones que webpack va a analizar para preparar el compilado.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // son las reglas y particularidades que son necesarias para la construccion de nuestros recursos.
  module: {
    rules: [
      // regla 1: identificar archivos javascript y como es el uso de babel dentro de la configuracion.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // regla 2: archivos html.
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      // regla 3: archivos css.
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: '/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/[name].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback:true,
    port: 3005,
  },
};
