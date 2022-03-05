const path = require("path");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/xiaotao/'
        : '/',
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src/assets/image"),
                "_": path.resolve(__dirname, "./src/assets/music"),
            }
        }
    }
};