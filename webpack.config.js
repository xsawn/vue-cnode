
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const ROOT_PATH = path.resolve(__dirname, 'src/index.js')
const DEST_PATH = path.resolve(__dirname, 'public')

module.exports = {
	mode: 'development',
	entry: ROOT_PATH,
	output: {
		path: DEST_PATH,
		filename: 'bundle.js'
	},
	module:{
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            },
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')

	],
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js',
			'$': 'jquery/dist/jquery.js'
		},
		extensions: ['.js', '.vue']
	}
}