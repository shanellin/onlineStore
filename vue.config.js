// vue.config.js
module.exports = {
    // 配置dev後訪問路徑為http://localhost:8000/dev/
    publicPath: process.env.NODE_ENV == 'develop' ? '/dev/' : '/',
    // 輸出文件路徑，默認為dist
    outputDir: 'dist',
    devServer: {
        port: 3000,
        open: true,
        compress: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
}
