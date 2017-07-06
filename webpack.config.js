var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
  	contentBase: path.join(__dirname, "dist"),
 	 compress: true,
  	port: 9000
},
  module:{
   loaders:[
	{
          test: /\.scss$/,
          loaders:[
		'style-loader',
		'css-loader',
		'autoprefixer-loader',
		'sass-loader'
		]
	},
        {
	  test:/\.(png|jpg|jpeg)$/,
	 loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
        ]
	}
           ]
  }
}
