const WebpackAliyunOssPlugin = require('./oss');
const ENV = process.env.NODE_ENV;

module.exports = {
    outputDir: 'docs',
    productionSourceMap: false,

    css: {
        sourceMap: true
    },

    configureWebpack: {
        plugins: [
            new WebpackAliyunOssPlugin({
                enable: false
            })
        ]
    },

    publicPath: ENV === "development" ? "" : "/SuikaSibyl.github.io/",
};
