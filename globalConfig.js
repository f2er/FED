module.exports = {
	// 访问
	"host": "localhost",
	"port": 3000,
	"path": {
		"views": __dirname + '/views',
		"public": __dirname + '/public',
		"backend": __dirname + '/backend'
	},
	// global variables that available to all ftl
	"globals": {
		"baseUrl": "http://www.ijser.cn/",
		"version": "0.0.5",
		"appName": "FED-Demo"
	},
	// Enable proxy support
	"useProxy": true,
	"proxySetting": {
		"port": 80,
		"router": { // support path
			'cy4749.cyou-inc.com': 'localhost:81',
			'app.changyou.com': 'localhost:3000'
		},
		"remote": {
			"host": "123.126.70.39",
			"port": 80
		}
	}
};
