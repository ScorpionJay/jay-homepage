
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 优化css插件
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const config = {
	context: path.resolve(__dirname, 'src'),
	entry:{
		app: './index.js',
		vendor: ['react', 'react-dom','redux','react-redux','react-router-dom']
	},
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
                use: [
                    // 'file-loader?hash=sha512&digest=hex&name=image/[hash].[ext]',
                    'url-loader?limit=3000&name=image/[hash:5].[ext]',// 小于3k的使用base64
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Jay's Homepage",
			template: './index.html',
			minify:{ 
                removeComments : true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
		}),
		// build optimization plugins
		new webpack.optimize.CommonsChunkPlugin({
		    name: 'vendor',
		    filename: 'js/vendor.[hash:5].js',
		}),
		new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,  // 是否输出注释
          },
          compress: {
            warnings: false
          }
        }),
		new ExtractTextPlugin({
                filename: "css/style.[hash:5].css",
                disable: false,
                allChunks: true
        }),
		// 优化css插件
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }),
		new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify('production') 
           }
        }),
        new webpack.BannerPlugin("Copyright by Jay"),
        new CopyWebpackPlugin([
            { from: 'json', to: 'json' }
        ])
	],
	devServer: {
		contentBase: path.join(__dirname, "src"),
		port:9000,
		historyApiFallback: true,
        proxy:{
            "/ad": {
                target: "http://ads.service.kugou.com",
                changeOrigin: true,
                pathRewrite: {"^/ad" : ""}
            }
        }
	}
}

module.exports = config