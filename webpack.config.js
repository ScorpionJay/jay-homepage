/**
* webpack develop config
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const config = {
	context: path.resolve(__dirname, '.'),
	devtool: "inline-source-map",
	entry:{
		bundle: [
               'react-hot-loader/patch', 
               'webpack-dev-server/client?http://0.0.0.0:1112', 
               //'webpack/hot/only-dev-server', 
               './src/index.js'
            ],	
		vendor: ['react', 'react-dom','redux','react-router-dom']
	},
	// externals: {
 //            // require("jquery") is external and available
 //            //  on the global var jQuery
 //            'jquery': 'jQuery',
 //            'react':'window.React',
 //            'react-dom':'window.ReactDOM'
 //    },
	output: {
		filename: 'js/app.[hash:5].js',
		path: path.resolve(__dirname,'dist'),
		publicPath: '/',
		chunkFilename : 'js/[name].[hash:5].js', // or whatever other format you want.
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'					
				}
			},
			// {
			// 	test: /\.scss$/,
			// 	use: [{
			//                loader: "style-loader"
			//            }, {
			//                loader: "css-loader"
			//            }, {
			//                loader: "sass-loader"
			//            }]
			// },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader?name=image/[hash].[ext]?']
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'dev',
			template: './src/index.html'
		}),
		new ExtractTextPlugin({
			filename: "css/style.[hash:5].css",
		}),
		// build optimization plugins
		// new webpack.optimize.CommonsChunkPlugin({
		//     name: 'vendor',
		//     filename: 'vendor.js',
		// }),
		new webpack.optimize.CommonsChunkPlugin({
                        names: ['vendor','manifest'],
                        filename: 'js/[name].js'
                    }),
		new webpack.HotModuleReplacementPlugin(), // Enable HMR
		new webpack.NamedModulesPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:1112' })
	],
	devServer: {
		contentBase: path.join(__dirname, "src"),
		port:1112,
		host: '0.0.0.0',
		hot:true,
		historyApiFallback: true,
        proxy:{
            "/kugou": {
                target: "http://m.kugou.com",
                changeOrigin: true,
                pathRewrite: {"^/kugou" : ""}
            }
        }
	}
}

module.exports = config