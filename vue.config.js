const path = require("path");

module.exports = {
    devServer: {
        port: 3000
    },
    outputDir: './dist',
    chainWebpack: config => {
        config
            .entry("main")
            .clear()
            .add("./src/main.js")
            .end();
        config.resolve.alias
            .set("~", path.join(__dirname, "./src"))
    }
};