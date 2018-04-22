
const webpack = require('webpack');
const devServer = require('webpack-dev-server');

const devConfig = require('./webpack.config.js');

console.log('building start...')

let server = new devServer(webpack(devConfig), {
	hot: true,
	inline: true,
	proxy: {
		'/topics': {
			target:'https://cnodejs.org/api/v1',
			secure: false
		},
		'/accesstoken': {
			target:'https://cnodejs.org/api/v1',
			secure: false
		}
	}

})
server.listen(3000)

