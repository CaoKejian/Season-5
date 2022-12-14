// vue.config.js
// 官方配置参考：https://cli.vuejs.org/zh/config/#vue-config-js
// csdn文章参考：https://blog.csdn.net/qq_40279656/article/details/107805720
module.exports = {
	publicPath: '/',    // 启动页地址
	outputDir: 'dist', // 打包的目录
	lintOnSave: true, // 在保存时校验格式
    publicPath:'./',
	productionSourceMap: false, // 生产环境是否生成 SourceMap
	// 关于项目本地服务器设置，本地服务器只在开发时有用，开发完成之后就没用了
    css:{
        loaderOptions: {
            sass: {
              prependData: `
              @import "@/styles/element.scss";
              ` // 引入全局样式的文件位置 多个以分号分隔
            }
          }
    },
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    //         loader: require.resolve("url-loader"),
    //         options: {
    //           limit: 10000,
    //           name: "static/media/[name].[hash:8].[ext]",
    //         },
        
    //     });
    //     return config;
    // },

	devServer: {
		open: true, // 启动服务后是否打开浏览器
		host: '0.0.0.0', //首页IP，写4个0表示动态获取
		port: 8080, // 服务端口
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'http://kumanxuan1.f3322.net:8881/cms',//目标地址
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}, // 设置代理
		before: app => { }
	},
}
// 注意：项目完成之后，打包时，服务器代理并不会被打进发布包，在打包之前一定要把本地代理地址改为真正的在线地址；
// 修改这个文件，需要重启服务器

// 项目开发完，需要打包项目，执行npm run build。会在我们的项目目录下面生成一个dist的文件夹，里面存放的就是打包后的代码；
// 发布：只需要将dist文件中所有的内容复制到服务器的静态文件夹(public)中就可以了
